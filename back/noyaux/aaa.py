import pytesseract
import numpy as np
from PIL import Image
filename = '1.jpg'
img1 = np.array(Image.open(filename))
text = pytesseract.image_to_string(img1)
