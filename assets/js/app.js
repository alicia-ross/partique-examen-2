class Keyboard {
    constructor(name, brand, compatibleDevices, connectivityTechnology, keyboardDescription, specialFeature, colour, numberOfKeys, style, productDimensions, material){
        {this.name=name;
        this.brand=brand;
        this.compatibleDevices=compatibleDevices;
        this.connectivityTechnology=connectivityTechnology;
        this.keyboardDescription=keyboardDescription;
        this.specialFeature=specialFeature;
        this.colour=colour;
        this.numberOfKeys=numberOfKeys;
        this.style=style;
        this.productDimensions=productDimensions;
        this.material=material;
        }
    }

    toHtml(){
        const keyboardElement = document.createElement('div');
        const nameElement = document.createElement('span');
        const brandElement = document.createElement('span');
        const compatibleDevicesElement = document.createElement('span');
        const connectivityTechnologyElement = document.createElement('span');
        const keyboardDescriptionElement = document.createElement('span');
        const specialFeatureElement = document.createElement('span');
        const colourElement = document.createElement('span');
        const numberOfKeysElement = document.createElement('span');
        const styleElement = document.createElement('span');
        const productDimensionsElement = document.createElement('span');
        const materialElement = document.createElement('span');

        nameElement.textContent = this.name;
        brandElement.textContent = this.brand;
        compatibleDevicesElement.textContent = this.compatibleDevices;
        connectivityTechnologyElement.textContent = this.connectivityTechnology;
        keyboardDescriptionElement.textContent = this.keyboardDescription;
        specialFeatureElement.textContent = this.specialFeature;
        colourElement.textContent = this.colour;
        numberOfKeysElement.textContent = this.numberOfKeys;
        styleElement.textContent = this.style;
        productDimensionsElement.textContent = this.productDimensions;
        materialElement.textContent = this.materialElement;

        keyboardElement.appendChild(nameElement);
        keyboardElement.appendChild(brandElement);
        keyboardElement.appendChild(compatibleDevicesElement);
        keyboardElement.appendChild(connectivityTechnologyElement);
        keyboardElement.appendChild(keyboardDescriptionElement);
        keyboardElement.appendChild(specialFeatureElement);
        keyboardElement.appendChild(colourElement);
        keyboardElement.appendChild(numberOfKeysElement);
        keyboardElement.appendChild(styleElement);
        keyboardElement.appendChild(productDimensionsElement);
        keyboardElement.appendChild(materialElement);

        return keyboardElement;
    }



}


const keyboards= [
    new Keyboard("Magic-Refiner","MAGIC-REFINER","Smartphone","Bluetooth","Mechanical","Ergonomic","Off-white&Orange/RedSwitch",68,"Modern","31.2Lx10.2Wx4.3HCentimetres","Polycarbonate"),
    new Keyboard("Magic-Refiner","MAGIC-REFINER","Smartphone","Bluetooth","Mechanical","Ergonomic","Off-white&Orange/RedSwitch",68,"Modern","31.2Lx10.2Wx4.3HCentimetres","Polycarbonate"),
    new Keyboard("Magic-Refiner","MAGIC-REFINER","Smartphone","Bluetooth","Mechanical","Ergonomic","Off-white&Orange/RedSwitch",68,"Modern","31.2Lx10.2Wx4.3HCentimetres","Polycarbonate"),
    new Keyboard("Magic-Refiner","MAGIC-REFINER","Smartphone","Bluetooth","Mechanical","Ergonomic","Off-white&Orange/RedSwitch",68,"Modern","31.2Lx10.2Wx4.3HCentimetres","Polycarbonate"),
];


keyboards.forEach((keyboard) => {
    document.body.appendChild(keyboard.toHtml());
});