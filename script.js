const formContainer = document.createElement('div')
formContainer.classList.add('formContainer')
document.body.appendChild(formContainer)

const form = document.createElement('form');
form.action = '/submit';
form.method = 'post';

const elements = [
    { type: 'text', label: 'Name', id: 'name', required: true },
    { type: 'email', label: 'Email', id: 'email', required: true },
    { type: 'tel', label: 'Phone', id: 'phone', required: true },
    { type: 'textarea', label: 'Message', id: 'message', required: true },
    { type: 'select', label: 'Options', id: 'options', required: true, options: ['Option 1', 'Option 2', 'Option 3'] },
    { type: 'radio', label: 'Choose one', id: 'radioGroup', options: ['Radio 1', 'Radio 2', 'Radio 3'], required: true }
];

elements.forEach(element => {
    const label = document.createElement('label');
    label.textContent = element.label;
    label.setAttribute('for', element.id);
    form.appendChild(label);

    let input;
    if (element.type === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 4;
        input.cols = 50;
    } else if (element.type === 'select') {
        input = document.createElement('select');
        element.options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.toLowerCase().replace(' ', '');
            opt.textContent = option;
            input.appendChild(opt);
        });
    } else if (element.type === 'radio') {
        element.options.forEach(option => {
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = option.toLowerCase().replace(' ', '');
            radio.name = element.id;
            radio.value = option.toLowerCase().replace(' ', '');
            form.appendChild(radio);
            const radioLabel = document.createElement('label');
            radioLabel.setAttribute('for', radio.id);
            radioLabel.textContent = option;
            form.appendChild(radioLabel);
        });
        form.appendChild(document.createElement('br'));
        return; 
    } else {
        input = document.createElement('input');
        input.type = element.type;
        input.required = element.required;
    }

    input.id = element.id;
    input.name = element.id;
    form.appendChild(input);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
});

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Submit';
form.appendChild(submitButton);

formContainer.appendChild(form);



/* Style */
// formcontainer
formContainer.style.height = '100vh';
formContainer.style.backgroundColor = 'linear-gradient(135deg, #0d0d0d, #1a1a1a)';
formContainer.style.fontFamily = 'Arial, sans-serif';
formContainer.style.padding = '20px';
formContainer.style.color = '#e0e0e0';
formContainer.style.border = '1px solid #333';
formContainer.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';

// form styles
form.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.7)';
form.style.color = '#e0e0e0';
form.style.borderRadius = '15px';
form.style.padding = '20px';
form.style.background = 'linear-gradient(135deg, #1a1a1a, #262626)';
form.style.gap = '10px';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.justifyContent = 'center';
form.style.alignContent = 'center';
form.style.border = '1px solid #333';

// label style
const labels = document.querySelectorAll('label');
labels.forEach(label => {
    label.style.marginBottom = '5px';
    label.style.fontWeight = 'bold';
    label.style.color = '#fff';
});

// input style
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.style.background = '#121212';
    input.style.color = '#00ffcc';
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.border = '1px solid #00ffcc';
    input.style.boxShadow = '0 0 5px rgba(0, 255, 255, 0.5)';
    input.style.outline = 'none';
    input.style.borderRadius = '5px';
    input.style.marginBottom = '10px';
    input.style.boxSizing = 'border-box';
    input.style.fontSize = '14px';
    input.style.transition = 'all 0.3s ease';
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 15px rgba(0, 255, 255, 1)';
        input.style.borderColor = '#00ffcc';
    });
    input.addEventListener('blur', () => {
        input.style.boxShadow = '0 0 5px rgba(0, 255, 255, 0.5)';
        input.style.borderColor = '#00ffcc';
    });
});

// button style
submitButton.style.width = '100%';
submitButton.style.padding = '10px';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '5px';
submitButton.style.border = '1px solid #00ffcc';
submitButton.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.7)';
submitButton.style.background = 'linear-gradient(135deg, #00ffcc, #006666)';
submitButton.style.color = '#000';
submitButton.style.fontWeight = 'bold';
submitButton.style.cursor = 'pointer';
submitButton.style.transition = 'all 0.3s ease';

submitButton.addEventListener('mouseover', () => {
    submitButton.style.background = 'linear-gradient(135deg, #006666, #00ffcc)';
    submitButton.style.boxShadow = '0 0 20px rgba(0, 255, 255, 1)';
});
submitButton.addEventListener('mouseout', () => {
    submitButton.style.background = 'linear-gradient(135deg, #00ffcc, #006666)';
    submitButton.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.7)';
});

// radio button
const radioGroupContainer = document.createElement('div');
radioGroupContainer.style.display = 'flex'; 
radioGroupContainer.style.flexWrap = 'wrap'; 
radioGroupContainer.style.gap = '10px';
radioGroupContainer.style.marginBottom = '15px'; 
radioGroupContainer.style.alignItems = 'center'; 
const radios = form.querySelectorAll('input[type="radio"]');
const radioLabels = form.querySelectorAll('input[type="radio"] + label');
radios.forEach((radio, index) => {
    const radioWrapper = document.createElement('div');
    radioWrapper.style.display = 'flex';
    radioWrapper.style.alignItems = 'center';
    radioWrapper.style.gap = '20px'; 
    radioWrapper.appendChild(radio);
    radioWrapper.appendChild(radioLabels[index]);
    radioGroupContainer.appendChild(radioWrapper);
});

radios.forEach(radio => {
    radio.style.accentColor = '#00ffcc';
    radio.style.width = '18px';
    radio.style.height = '18px';
});

const radioLabel = form.querySelector('label[for="radioGroup"]'); 
form.insertBefore(radioGroupContainer, radioLabel.nextSibling); 
radioLabel.style.marginBottom = '10px'; 
radioLabel.style.fontWeight = 'bold'; 
radioLabels.forEach(label => {
    label.style.color = '#00ffcc';
    label.style.fontWeight = 'bold';
    label.style.textShadow = '0 0 5px #00ffcc';
});


// title of the form
const formTitle = document.createElement('h2');
formTitle.textContent = 'Finish it';
formTitle.style.textAlign = 'center';
formTitle.style.marginBottom = '20px';
formTitle.style.color = '#00ffcc';
formTitle.style.fontSize = '24px';
formTitle.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.7)';
formTitle.style.borderBottom = '1px solid #00ffcc';
formTitle.style.paddingBottom = '10px';
form.prepend(formTitle);