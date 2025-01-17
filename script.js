const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

const countries = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound Sterling' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'NZD', name: 'New Zealand Dollar' },
    { code: 'ZAR', name: 'South African Rand' },
    { code: 'SEK', name: 'Swedish Krona' },
    { code: 'NOK', name: 'Norwegian Krone' },
    { code: 'DKK', name: 'Danish Krone' },
    { code: 'KRW', name: 'South Korean Won' },
    { code: 'HKD', name: 'Hong Kong Dollar' },
    { code: 'MYR', name: 'Malaysian Ringgit' },
    { code: 'THB', name: 'Thai Baht' },
    { code: 'IDR', name: 'Indonesian Rupiah' },
    { code: 'PHP', name: 'Philippine Peso' },
    { code: 'VND', name: 'Vietnamese Dong' },
    { code: 'BRL', name: 'Brazilian Real' },
    { code: 'ARS', name: 'Argentine Peso' },
    { code: 'CLP', name: 'Chilean Peso' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'PEN', name: 'Peruvian Sol' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'UYU', name: 'Uruguayan Peso' },
    { code: 'EGP', name: 'Egyptian Pound' },
    { code: 'MAD', name: 'Moroccan Dirham' },
    { code: 'KES', name: 'Kenyan Shilling' },
    { code: 'TZS', name: 'Tanzanian Shilling' },
    { code: 'UGX', name: 'Ugandan Shilling' },
    { code: 'GHS', name: 'Ghanaian Cedi' },
    { code: 'NGN', name: 'Nigerian Naira' },
    { code: 'ZMW', name: 'Zambian Kwacha' },
    { code: 'RUB', name: 'Russian Ruble' },
    { code: 'UAH', name: 'Ukrainian Hryvnia' },
    { code: 'PLN', name: 'Polish Zloty' },
    { code: 'CZK', name: 'Czech Koruna' },
    { code: 'HUF', name: 'Hungarian Forint' },
    { code: 'RON', name: 'Romanian Leu' },
    { code: 'TRY', name: 'Turkish Lira' },
    { code: 'SAR', name: 'Saudi Riyal' },
    { code: 'AED', name: 'United Arab Emirates Dirham' },
    { code: 'QAR', name: 'Qatari Riyal' },
    { code: 'OMR', name: 'Omani Rial' },
    { code: 'KWD', name: 'Kuwaiti Dinar' },
    { code: 'BHD', name: 'Bahraini Dinar' },
    { code: 'IQD', name: 'Iraqi Dinar' },
    { code: 'IRR', name: 'Iranian Rial' },
    { code: 'PKR', name: 'Pakistani Rupee' },
    { code: 'LKR', name: 'Sri Lankan Rupee' },
    { code: 'NPR', name: 'Nepalese Rupee' },
    { code: 'BDT', name: 'Bangladeshi Taka' },
    { code: 'MMK', name: 'Myanmar Kyat' },
    { code: 'KHR', name: 'Cambodian Riel' },
    { code: 'LAK', name: 'Lao Kip' },
    { code: 'MNT', name: 'Mongolian Tugrik' },
    { code: 'KZT', name: 'Kazakhstani Tenge' },
    { code: 'UZS', name: 'Uzbekistani Som' },
    { code: 'TJS', name: 'Tajikistani Somoni' },
    { code: 'AFN', name: 'Afghan Afghani' },
    { code: 'AMD', name: 'Armenian Dram' },
    { code: 'AZN', name: 'Azerbaijani Manat' },
    { code: 'GEL', name: 'Georgian Lari' },
    { code: 'MDL', name: 'Moldovan Leu' },
    { code: 'ALL', name: 'Albanian Lek' },
    { code: 'MKD', name: 'Macedonian Denar' },
    { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark' },
    { code: 'HRK', name: 'Croatian Kuna' },
    { code: 'BGN', name: 'Bulgarian Lev' },
    { code: 'ISK', name: 'Icelandic Krona' },
    { code: 'LTL', name: 'Lithuanian Litas' },
    { code: 'LVL', name: 'Latvian Lats' },
    { code: 'BYN', name: 'Belarusian Ruble' },
    { code: 'NAD', name: 'Namibian Dollar' },
    { code: 'BWP', name: 'Botswana Pula' },
    { code: 'SZL', name: 'Swazi Lilangeni' },
    { code: 'ETB', name: 'Ethiopian Birr' },
    { code: 'DZD', name: 'Algerian Dinar' },
    { code: 'TND', name: 'Tunisian Dinar' },
    { code: 'LYD', name: 'Libyan Dinar' },
    { code: 'SDG', name: 'Sudanese Pound' },
    { code: 'MWK', name: 'Malawian Kwacha' },
    { code: 'BZD', name: 'Belize Dollar' },
    { code: 'KYD', name: 'Cayman Islands Dollar' },
    { code: 'XCD', name: 'East Caribbean Dollar' },
    { code: 'JMD', name: 'Jamaican Dollar' },
    { code: 'TTD', name: 'Trinidad and Tobago Dollar' },
    { code: 'BSD', name: 'Bahamian Dollar' },
    { code: 'HTG', name: 'Haitian Gourde' },
    { code: 'SRD', name: 'Surinamese Dollar' }
];

countries.forEach(country => {
    const option1 = document.createElement('option');
    option1.value = country.code;
    option1.textContent =`${country.code} (${country.name})` ;
    fromCurrencyElement.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = country.code;
    option2.textContent =`${country.code} (${country.name})` ;
    toCurrencyElement.appendChild(option2);
});

// fetch data from api

const getExchangeRate = async () =>{
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    // fetch data from api
    // https://api.currencyapi.com/v3/latest?apikey=cur_live_6k51SveGyhtJIbbG3fr8klplebG0p6yTJW8v9u0c&currencies=EUR%2CUSD%2CCAD

    const response =await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data =await  response.json()
  
    const conversionRate  = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    convertedAmountElement.value = convertedAmount
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
// fetching exchange rate on button click

fromAmountElement.addEventListener('input', getExchangeRate)
fromCurrencyElement.addEventListener('change', getExchangeRate)
toCurrencyElement.addEventListener('change', getExchangeRate)
window.addEventListener('load', getExchangeRate)
