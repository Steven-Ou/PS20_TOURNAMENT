from PIL import Image

def fix_tournament_board(image_path, output_path):
    # 1. Open the tournament board image
    img = Image.open(image_path)
    
    # 2. Define the coordinates for the "Today's Results" box in the middle
    # Format: (left, upper, right, lower)
    # Adjust these pixel values slightly if your source image dimensions differ
    crop_box = (150, 490, 670, 730) 
    
    # Crop the clean results section
    results_section = img.crop(crop_box)
    
    # 3. Define where to paste it over the top "Matchups" grid
    # This aligns it to cover the old 4-team linear matchup box
    paste_destination = (150, 170)
    
    # Paste the cropped section onto the main image
    img.paste(results_section, paste_destination)
    
    # 4. Save the newly organized layout
    img.save(output_path)
    print(f"Success! Saved the reorganized board to {output_path}")

# Run the program
if __name__ == "__main__":
    fix_tournament_board("tournament.jpg", "fixed_tournament_board.jpg")