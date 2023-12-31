const barcodeTypes = [
    { type: 'code128', name: 'Code 128' },
    { type: 'qrcode', name: 'QR Code' },
    { type: 'ean13', name: 'EAN-13' },
    { type: 'code39', name: 'Code 39' },
    { type: 'itf', name: 'ITF (Interleaved 2 of 5)' },
    { type: 'code93', name: 'Code 93' },
    { type: 'ean8', name: 'EAN-8' },
    { type: 'pdf417', name: 'PDF417' },
    { type: 'datamatrix', name: 'Data Matrix' },
    { type: 'aztec', name: 'Aztec Code' },
    { type: 'maxicode', name: 'MaxiCode' },
    { type: 'rss14', name: 'RSS-14' },
    { type: 'rssexpanded', name: 'RSS Expanded' },
    { type: 'upcE', name: 'UPC-E' },
    { type: 'code11', name: 'Code 11' },
    { type: 'code93extended', name: 'Code 93 Extended' },
    { type: 'msi', name: 'MSI (Modified Plessey)' },
    { type: 'pharmacode', name: 'Pharmacode' },
    { type: 'codabar', name: 'Codabar' },
    { type: 'plessey', name: 'Plessey Code' },
    { type: 'itf14', name: 'ITF-14' },
    { type: 'microqrcode', name: 'Micro QR Code' },
    { type: 'databar', name: 'GS1 DataBar' },
    { type: 'databarexpanded', name: 'GS1 DataBar Expanded' },
    { type: 'databarlimited', name: 'GS1 DataBar Limited' },
    { type: 'postnet', name: 'POSTNET' },
    { type: 'planet', name: 'PLANET' },
    { type: 'uspsintelligentmail', name: 'USPS Intelligent Mail' },
    { type: 'auspost', name: 'Australia Post' },
    { type: 'royalmail', name: 'Royal Mail' },
    { type: 'kix', name: 'KIX (Dutch KIX Code)' },
    { type: 'japanpost', name: 'Japan Post' },
    { type: 'msiplessey', name: 'MSI Plessey' },
    { type: 'telepen', name: 'Telepen' },
    { type: 'eanvelocity', name: 'EAN Velocity' },
    { type: 'uspsfacingidentificationMark', name: 'USPS Facing Identification Mark' },
    { type: 'isbn', name: 'ISBN' },
    { type: 'issn', name: 'ISSN' },
    { type: 'ismn', name: 'ISMN' },
    { type: 'dutchkIX', name: 'Dutch KIX Code' },
    { type: 'target', name: 'TARGET' },
    { type: 'pzn', name: 'Pharmazentralnummer (PZN)' },
    { type: 'circularcoupon', name: 'Circular Coupon' },
    { type: 'flattermarken', name: 'Flattermarken' },
    { type: 'rm4scc', name: 'RM4SCC' },
    { type: 'postbar', name: 'PostBar' },
    { type: 'canadianpost', name: 'Canadian Post' },
    { type: 'micre13B', name: 'MICR E-13B' },
    { type: 'hbfbarcode', name: 'HBF Barcode' },
    { type: 'swisspostparcel', name: 'Swiss Post Parcel' },
    { type: 'telecomitalia', name: 'Telecom Italia' },
    { type: 'onecode', name: 'OneCode (4-State Customer Barcode)' },
    { type: 'logmars', name: 'LOGMARS' },
    { type: 'mscc13', name: 'MSCC-13' },
    { type: 'postausgangsbuchbarcode', name: 'Postausgangsbuch Barcode' },
    { type: 'vin', name: 'VIN (Vehicle Identification Number)' },
    { type: 'debic2d', name: 'Debic 2D' },
    { type: 'vicsbol', name: 'VICS BOL (Bill of Lading)' },
    { type: 'ansiart', name: 'ANSI ART' },
    { type: 'openean', name: 'Open EAN' },
    { type: 'scc14', name: 'SCC-14' },
    { type: 'securpharm', name: 'SecurPharm' },
    { type: 'swedishpostal', name: 'Swedish Postal' },
    { type: 'daft', name: 'DAFT (Dutch Association for the Automatic Identification of Art and Collectibles)' },
    { type: 'upnqr', name: 'UPNQR (Ukrainian Postal Numeric Code)' },
    { type: 'barfly', name: 'Barfly' },
    { type: 'bokode', name: 'Bokode' },
    { type: 'posicode', name: 'PosiCode' },
    { type: 'pzn8', name: 'PZN-8' },
    { type: 'pznx', name: 'PZN-X' },
    { type: 'cpack', name: 'CPack' },
    { type: 'swissqrcode', name: 'Swiss QR Code' },
    { type: 'kode128', name: 'Kode128' },
    { type: 'datalogic2of5', name: 'Datalogic 2 of 5' },
    { type: 'datalogic3of9', name: 'Datalogic 3 of 9' },
    { type: 'datalogic128', name: 'Datalogic 128' },
    { type: 'datalogiccodabar', name: 'Datalogic Codabar' },
    { type: 'datalogicindustrial2of5', name: 'Datalogic Industrial 2 of 5' },
    { type: 'datalogicmatrix', name: 'Datalogic Matrix' },
    { type: 'datalogicmSI', name: 'Datalogic MSI' },
    { type: 'datalogicplessey', name: 'Datalogic Plessey' },
    { type: 'datalogictelepen', name: 'Datalogic Telepen' },
    { type: 'datalogicukpostal', name: 'Datalogic UK Postal' },
    { type: 'hongkong2of5', name: 'Hong Kong 2 of 5' },
    { type: 'iata2of5', name: 'IATA 2 of 5' },
    { type: 'itf6', name: 'ITF-6' },
    { type: 'matrix2of5', name: 'Matrix 2 of 5' },
    { type: 'uspssackLabel', name: 'USPS Sack Label' },
    { type: 'uspstrayLabel', name: 'USPS Tray Label' },
    { type: 'code32', name: 'Code 32' },
    { type: 'danishpostal', name: 'Danish Postal' },
    { type: 'gs1datamatrix', name: 'GS1 DataMatrix' },
    { type: 'micropdf417', name: 'MicroPDF417' },
    { type: 'posti', name: 'Posti' },
    { type: 'swisspostfinance', name: 'Swiss PostFinance' },
    { type: 'ukrainefastparcel', name: 'Ukraine Fast Parcel' },
    { type: 'danskpost', name: 'Dansk Post' },
    { type: 'royalmailmailmark', name: 'Royal Mail Mailmark' },
    { type: 'australiaposteparcel', name: 'Australia Post eParcel' },
    { type: 'austrianpost', name: 'Austrian Post' },
    { type: 'dpleopard', name: 'DP LEOPARD' },
    { type: 'hibcaztec', name: 'HIBC Aztec' },
    { type: 'hibccodablockF', name: 'HIBC Codablock F' },
    { type: 'hibcdatamatrix', name: 'HIBC Datamatrix' },
    { type: 'hibcdatabar', name: 'HIBC Databar' },
    { type: 'hibcmicroPDF', name: 'HIBC MicroPDF' },
    { type: 'hibcpdf417', name: 'HIBC PDF417' },
    { type: 'hibcqrCode', name: 'HIBC QR Code' },
    { type: 'koreapost', name: 'Korea Post' },
    { type: 'postnet24', name: 'Postnet 24' },
    { type: 'pzn7', name: 'PZN-7' },
    { type: 'qrcodeMicro', name: 'QR Code Micro' },
    { type: 'vietnamesePostal', name: 'Vietnamese Postal' },
    { type: 'uspsIntelligentMailPackageBarcode', name: 'USPS Intelligent Mail Package Barcode' },
];


module.exports = {barcodeTypes};