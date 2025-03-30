const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
  const select = document.querySelector("#from select");
  for(let i in countryList){
    const newOption = document.createElement("option");
    newOption.value = countryList[i];
    newOption.innerHTML = i;
    select.appendChild(newOption);
  }
  const select2 = document.querySelector("#to select");
  for(let i in countryList){
    const newOption = document.createElement("option");
    newOption.value = countryList[i];
    newOption.innerHTML = i;
    select2.appendChild(newOption);
  }
  let fromData;
  document.querySelector("#from select").addEventListener('change',(e)=>{
    const value = e.target.value;
    const flagApi = `https://flagsapi.com/${value}/flat/64.png`;
    document.querySelector("#from img").src = flagApi;
    console.log(value);
    console.log(document.querySelector("#from select").name);
    fromData = e.target.options[e.target.selectedIndex].text;
    console.log(fromData);
  })
  let toData;
  document.querySelector("#to select").addEventListener('change',(e)=>{
    const value = e.target.value;
    const flagApi = `https://flagsapi.com/${value}/flat/64.png`;
    document.querySelector("#to img").src = flagApi;
    console.log(value);
    toData = e.target.options[e.target.selectedIndex].text;
  })
  const apiKey = 'cur_live_JJJcpILjW6qXhQmWcl0PjaLVXBYQci4yewRQxYMK';
  const api = `https://v6.exchangerate-api.com/v6/762b51ca2954a95f08c39765/latest/`;
  async function convertResponse(){
    const response = await fetch(api+`${fromData}`);
    const result = await response.json();
       console.log(result);
       console.log(fromData);
       console.log(toData);
    document.querySelector("#message").innerText = `1 ${fromData}  =  ${result.conversion_rates[toData]} ${toData}`;
    let amount = document.querySelector("#searchBar input").value;
    document.querySelector("#result").innerText = `${amount*result.conversion_rates[toData]} ${toData}`;
  }

  document.querySelector("#searchBar button").addEventListener('click',(e)=>{
    convertResponse();
  })

  document.querySelector("body").addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      convertResponse();
    }
  })
  
