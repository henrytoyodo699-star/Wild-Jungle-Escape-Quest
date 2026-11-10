import os
from PIL import Image

RAW_DIR = "map_raw" if os.path.exists("map_raw") else os.path.join("Wild Jungle - Escape Quest", "map_raw")
COMPILED_OUTPUT = "jungle_map_compiled.png"

# Kenney isometric base diamond dimensions
TILE_WIDTH = 132
TILE_HEIGHT = 66
PADDING = 60

LEVEL_GRID = [
    ["ground_grass_NE.png", "ground_pathStraight_NE.png", "ground_grass_NE.png", "tree_pineDefaultA_NE.png", "ground_grass_NE.png", "stone_largeA_NE.png"],
    ["ground_grass_NE.png", "ground_pathCorner_NE.png", "ground_pathStraight_NE.png", "ground_grass_NE.png", "ground_grass_NE.png", "ground_grass_NE.png"],
    ["ground_pathStraight_NW.png", "bridge_wood_NE.png", "ground_pathStraight_NW.png", "ground_riverStraight_NE.png", "ground_grass_NE.png", "tree_small_NE.png"],
    ["ground_riverStraight_NE.png", "ground_riverTile_NE.png", "ground_riverStraight_NE.png", "ground_riverStraight_NE.png", "tree_tall_NE.png", "ground_grass_NE.png"],
    ["ground_grass_NE.png", "ground_pathStraight_NE.png", "plant_bush_NE.png", "campfire_stones_NE.png", "ground_grass_NE.png", "ground_grass_NE.png"],
    ["tree_palm_NE.png", "ground_pathEnd_NE.png", "ground_grass_NE.png", "ground_grass_NE.png", "rock_largeB_NE.png", "ground_grass_NE.png"]
]

def generate_map():
    if not os.path.exists(RAW_DIR):
        print(f"Error: Directory '{RAW_DIR}' not found.")
        return

    rows = len(LEVEL_GRID)
    cols = len(LEVEL_GRID[0])

    placements = []
    min_x, min_y = float("inf"), float("inf")
    max_x, max_y = float("-inf"), float("-inf")

    # Pass 1: Measure exact bounds of all tiles so nothing gets cut off
    for r in range(rows):
        for c in range(cols):
            tile_name = LEVEL_GRID[r][c]
            path = os.path.join(RAW_DIR, tile_name)

            if os.path.exists(path):
                tile = Image.open(path).convert("RGBA")
                # Trim empty transparent borders for tight alignment
                bbox = tile.getbbox()
                if bbox:
                    iso_x = (c - r) * (TILE_WIDTH // 2) - (tile.width // 2)
                    iso_y = (c + r) * (TILE_HEIGHT // 2) - tile.height

                    placements.append((tile, iso_x, iso_y))

                    min_x = min(min_x, iso_x + bbox[0])
                    min_y = min(min_y, iso_y + bbox[1])
                    max_x = max(max_x, iso_x + bbox[2])
                    max_y = max(max_y, iso_y + bbox[3])
            else:
                print(f"Skipping missing tile: {tile_name}")

    if not placements:
        print("No tiles loaded!")
        return

    # Calculate exact canvas size with padding
    canvas_w = int(max_x - min_x) + (PADDING * 2)
    canvas_h = int(max_y - min_y) + (PADDING * 2)
    offset_x = -int(min_x) + PADDING
    offset_y = -int(min_y) + PADDING

    canvas = Image.new("RGBA", (canvas_w, canvas_h), (19, 38, 26, 255))

    # Pass 2: Paste all tiles shifted by offset so top is never clipped
    for tile, ix, iy in placements:
        canvas.paste(tile, (int(ix + offset_x), int(iy + offset_y)), tile)

    canvas.save(COMPILED_OUTPUT)
    print(f"Successfully compiled full map ({canvas_w}x{canvas_h}) to {COMPILED_OUTPUT}")

if __name__ == "__main__":
    generate_map()