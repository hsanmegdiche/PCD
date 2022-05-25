from pdf2image import convert_from_path
import pytesseract
import numpy as np
from PIL import Image
pdfs = r"cv.pdf"
pages = convert_from_path(pdfs, 350,poppler_path=r"C:\ProgramData\chocolatey\lib\poppler\tools\poppler-0.89.0-win32")

i = 1
for page in pages:
    image_name = str(i) + ".jpg"  
    page.save(image_name, "JPEG")
    i = i+1   
filename = '1.jpg'
img1 = np.array(Image.open(filename))
text = pytesseract.image_to_string(img1)
print(text)
