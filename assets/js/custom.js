   /**
   * 
   * FOR GENERATE CSS OPACITY ACCORDING TO TABS START
   * 
   **/
   const opacityRange = document.getElementById('opacityRange');
   const opacityInput = document.getElementById('opacityInput');
   const boxColor = document.getElementById('boxColor');
   const divBoxTab = document.getElementById('divBoxTab');
   const imageTab = document.getElementById('imageTab');
   const textTab = document.getElementById('textTab');
   const box = document.getElementById('box');
   const imageBox = document.getElementById('imageBox');
   const textContent = document.getElementById('textContent');
   const whiteBox = document.getElementById('whiteBox');
   const blackBox = document.getElementById('blackBox');
   const transparentBox = document.getElementById('transparentBox');
   const dummyText = document.getElementById('dummyText');
   const boxLayout = document.querySelector('.boxLaoyut');
   const manualBoxColor = document.getElementById('manualBoxColor');
   const displayText = document.getElementById('displayText');
   const textColorSection = document.querySelector('.text-colors');
   const textColor = document.getElementById('textColor');
   const manualTextColor = document.getElementById('manualTextColor');
   const textval = document.getElementById('textval');
   const boxColorSection = document.querySelector('.box-colors');
   const imageBackground = document.getElementById('imageBackground');

   //image upload const
   const imageUpload = document.getElementById('imageUpload');
   const imageUploadSection = document.querySelector('.image-Upload');
   const displayedImage = document.getElementById('displayedImage');
   const uploadedImage = document.getElementById('uploadedImage');
   manualBoxColor.value = boxColor.value;
   manualTextColor.value = textColor.value;

        //tabs active 
   function activateTab(tabElement) {
       const tabs = document.querySelectorAll('.tab');
       tabs.forEach(tab => {
           tab.classList.remove('active-tab');
       });
       tabElement.classList.add('active-tab');
   }

   function changeTextColor(color) {
       textval.style.color = color;
   }
   imageBackground.addEventListener('click', () => {
       changeBackgroundColor('url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeNpiPHPmDAM2YGxsjFWciYFEMKqBGMD4//9/rBJnz54dDSX6aQAIMABCtQiAsDRF+wAAAABJRU5ErkJggg==")');
   });

   function changeBackgroundColor(color) {
       boxLayout.style.background = color;
   }
   whiteBox.addEventListener('click', () => {
       changeBackgroundColor('white');
   });

   blackBox.addEventListener('click', () => {
       changeBackgroundColor('black');
   });

   function hideAllContent() {
       box.style.display = 'none';
       imageBox.style.display = 'none';
       textContent.style.display = 'none';
     

   }

   divBoxTab.addEventListener('click', () => {
       hideAllContent();
       activateTab(divBoxTab);
       box.style.display = 'block';
       box.style.opacity = opacityRange.value;
       box.style.backgroundColor = boxColor.value;
       dummyText.value = '';
       displayText.style.display = 'none';
       textColorSection.classList.add('hidden');
       boxColorSection.classList.remove('hidden');
       imageUploadSection.classList.add('hidden');
       
       
   });

   // stati IMAGE UPLOAD
   let selectedImageName = 'https://via.placeholder.com/200x200'; // Default image source
   
   //display image 
   uploadedImage.addEventListener('change', (event) => {
const selectedImage = event.target.files[0];

if (selectedImage) {
   imagePath = URL.createObjectURL(selectedImage); // Update the image path
   selectedImageName = selectedImage.name; // Update the image name
   
   displayedImage.src = imagePath;
   displayedImage.style.width = '200px';
   displayedImage.style.height = '200px';
}
});
   //image tab 
           imageTab.addEventListener('click', () => {
               hideAllContent();
               activateTab(imageTab);
               imageBox.style.display = 'block';
               imageBox.style.opacity = opacityRange.value;
               // imageBox.style.backgroundColor = boxColor.value;
               
               dummyText.value = '';
               displayText.style.display = 'none';
               textColorSection.classList.add('hidden');
               boxColorSection.classList.add('hidden'); 
               
               imageUploadSection.classList.remove('hidden');
           });


   textTab.addEventListener('click', () => {
       hideAllContent();
       activateTab(textTab);
       textContent.style.display = 'block';
       dummyText.value = '';
       const displayText = document.getElementById('displayText');
       displayText.style.display = 'block';
       box.style.display = 'none';
       imageBox.style.display = 'none';
       textColorSection.classList.remove('hidden');
       boxColorSection.classList.add('hidden');
       imageUploadSection.classList.add('hidden');
       
       textval.style.opacity = opacityRange.value;
   });

   opacityRange.addEventListener('input', () => {
       const opacityValue = opacityRange.value;
       opacityInput.value = opacityValue;
       box.style.opacity = opacityValue;
       imageBox.style.opacity = opacityValue;
       textval.style.opacity = opacityValue;
   });

   opacityInput.addEventListener('input', () => {
       const opacityValue = opacityInput.value;
       opacityRange.value = opacityValue;
       box.style.opacity = opacityValue;
       imageBox.style.opacity = opacityValue;
       textval.style.opacity = opacityValue;
   });

   boxColor.addEventListener('input', () => {
       const colorValue = boxColor.value;
       box.style.backgroundColor = colorValue;
       manualBoxColor.value = colorValue;
       imageBox.style.backgroundColor = colorValue;
       
   });

   manualBoxColor.addEventListener('input', () => {
       const colorValue = manualBoxColor.value;
       box.style.backgroundColor = colorValue;
       imageBox.style.backgroundColor = colorValue;
   });
   dummyText.addEventListener('input', () => {
       const displayText = document.getElementById('textval');
       const textValue = dummyText.value;
       displayText.innerText = textValue;
       textval.innerText = textValue;
   });

   textContent.addEventListener('input', () => {
       const textColor = textContent.value;
       const displayText = document.getElementById('displayText');
       displayText.style.color = textColor;
   });

   textColor.addEventListener('input', () => {
       const colorValue = textColor.value;
       changeTextColor(colorValue);
       manualTextColor.value = colorValue;
   });

   manualTextColor.addEventListener('input', () => { 
       const colorValue = manualTextColor.value;
       changeTextColor(colorValue);
   });

   function activateDefaultTab() {
       divBoxTab.click();
   }
activateDefaultTab();
/**
* 
* FOR GENERATE CSS OPACITY ACCORDING TO TABS END
* 
**/

/**
* FOR GENERATE HTML AND CSS START
**/

const generateCodeButton = document.getElementById('generateCodeButton');
const generatedHtmlContainer = document.createElement('div');
generatedHtmlContainer.classList.add('generated-code-container');

generateCodeButton.addEventListener('click', () => {
   clearGeneratedCode();
   
   const selectedTab = document.querySelector('.active-tab');
   const generatedHtml = generateHtml(selectedTab);
   const generatedCss = generateCss(selectedTab);
   
   const generatedCodeHtmlHeading = document.createElement('h5');
   generatedCodeHtmlHeading.innerText = 'HTML';
   generatedHtmlContainer.appendChild(generatedCodeHtmlHeading);
   
   const generatedCodeHtml = document.createElement('pre');
   generatedCodeHtml.innerText = generatedHtml;
   generatedHtmlContainer.appendChild(generatedCodeHtml);

   const generatedCodeCssHeading = document.createElement('h5');
   generatedCodeCssHeading.innerText = 'CSS';
   generatedHtmlContainer.appendChild(generatedCodeCssHeading);
   
   const generatedCodeCss = document.createElement('pre');
   generatedCodeCss.innerText = generatedCss;
   generatedHtmlContainer.appendChild(generatedCodeCss);

   const formGenerator = document.querySelector('.form-generator');
   formGenerator.appendChild(generatedHtmlContainer);
});

// Clear the generated code container
function clearGeneratedCode() {
   while (generatedCodeContainer.firstChild) {
       generatedCodeContainer.removeChild(generatedCodeContainer.firstChild);
   }
}

// Clear and regenerate code container when tabs are clicked
divBoxTab.addEventListener('click', () => {
   clearGeneratedCode();
});

imageTab.addEventListener('click', () => {
   clearGeneratedCode();
});

textTab.addEventListener('click', () => {
   clearGeneratedCode(); 
});

function clearGeneratedCode() {
   while (generatedHtmlContainer.firstChild) {
       generatedHtmlContainer.removeChild(generatedHtmlContainer.firstChild);
   }
}
//html display
function generateHtml(selectedTab) {
if (selectedTab.id === 'divBoxTab') {
   return '<div class="box" id="box">\n' +
          '    <h3>Sample Text</h3>\n' +
          '</div>';
} else if (selectedTab.id === 'imageTab') {
   return '<div class="image-box" id="imageBox">\n' +
          `    <img src="${selectedImageName}" alt="Please Upload Image " style="width: 200px; height: 200px;">\n` +
          
          '</div>';
} else if (selectedTab.id === 'textTab') {
   const textValue = dummyText.value || 'Sample Text';
   return '<div class="display-text" id="displayText">\n' +
          `    <p>${textValue}</p>\n` +
          '</div>';
}
}




   //css display
function generateCss(selectedTab) 
{
   let css = '';
   if (selectedTab.id === 'divBoxTab') {
       css += '.box {\n' +
          '    width: 200px;\n' +
          '    height: 200px;\n' +
          '    border: 1px solid #000;\n' +
          '    margin: 20px auto;\n' +
          '    display: flex;\n' +
          '    align-items: center;\n' +
          '    justify-content: center;\n' +
          '    text-align: center;\n' +
          '    flex-direction: column;\n' +
          '    opacity: ' + opacityRange.value + ';\n' +
          '    background-color: ' + boxColor.value + ';\n' +
          '    /* Add other CSS properties here */\n' +
          '}\n';

   } else if (selectedTab.id === 'imageTab') {//image upload and disply code
       css += '.image-box {\n' +
          '    width: 200px;\n' +
          '    height: 200px;\n' +
          '    margin: 20px auto;\n' +
          '    align-items: center;\n' +
          '    justify-content: center;\n' +
          '    overflow: hidden;\n' +
          '    opacity: ' + opacityRange.value + ';\n' +
          '    background-color: ' + boxColor.value + ';\n' +
          '    /* Add other CSS properties here */\n' +
          '}\n';

   } else if (selectedTab.id === 'textTab') {
       css += '.display-text {\n' +
          '    font-size: 50px;\n' +
          '    opacity: ' + opacityRange.value + ';\n' +
          '    color: ' + textColor.value + ';\n' +
          '    /* Add other CSS properties here */\n' +
          '}\n';
   }

   return css;
}
/**
* FOR GENERATE HTML AND CSS END
**/
