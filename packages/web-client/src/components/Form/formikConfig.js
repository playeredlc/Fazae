import * as Yup from 'yup';

const tripValidation = Yup.object().shape({
  numDays: Yup.number('Este campo deve receber um número.')
    .required('Informe quantos dias de viagem.')
    .min(1, 'Viagem deve ter pelo menos um dia.'),
  numPeople: Yup.number()
    .required('Informe o número de pessoas.')
    .min(1, 'Deve haver pelo menos uma pessoa.')
});

const transportValidation = Yup.object().shape({
  byCar: Yup.boolean(),
  byBusPlane: Yup.boolean(),
  fuelPrice: Yup.mixed()
    .when('byCar', {
      is: true,
      then: Yup.number().required('Carro selecionado. Informe o preço/litro do combustível.').positive('Valor inválido.'),
      otherwise: Yup.number()      
    }),
  fuelConsumption: Yup.mixed()
    .when('byCar', {
      is: true,
      then: Yup.number().required('Carro selecionado. Informe o consumo médio do veículo.').positive('Valor inválido.'),
      otherwise: Yup.number()     
    }),
  transportTicket: Yup.mixed()
    .when('byBusPlane', {
      is: true,
      then: Yup.number().required('Transporte pago selecionado. Informe o valor da passagem.').positive('Valor inválido.'),
      otherwise: Yup.number()
    }),
});

const rentValidation = Yup.object().shape({
  houseCharge: Yup.number().required('Informe o valor da diária.').positive('Valor inválido.'),
  extraCharge: Yup.number().positive('Valor inválido.'),
  breakfastCost: Yup.number().positive('Valor inválido.'),
  lunchCost: Yup.number().positive('Valor inválido.'),
  dinnerCost: Yup.number().positive('Valor inválido.'),
  extraEatingCost: Yup.number().positive('Valor inválido.'),
});

const validationArray = new Array();
validationArray.push(tripValidation, transportValidation, rentValidation);

const formConfig = {
  stepValidation: validationArray,
  initValues: {
    origin: '',
    destination: '',
    numDays: '',
    numPeople: '',
    byCar: false,
    byBusPlane: false,
    fuelPrice: '',
    fuelConsumption: '',
    transportTicket: '',
    houseCharge: '',
    extraCharge: '',
    breakfastCost: '',
    lunchCost: '',
    dinnerCost: '',
    extraEatingCost: '',            
  },
};

export default formConfig;
