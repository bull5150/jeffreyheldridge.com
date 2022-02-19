export class info {
    ticker: string;
    name: string;
    market: string;
    locale: string;
    primary_exchange: string;
    type: string;
    active: boolean;
    currency_name: string;
    cik: string;
    composite_figi: string;
    share_class_figi: string;
    last_updated_utc: string;
}
export class news{
    id: string;
    publisher: polyPublisher;
    title: string;
    published_utc: string;
    article_url: string;
    tickers: string[];
    amp_url: string;
    image_url: string;
    description: string;
    keywords: string[];
}
export class polyPublisher{
    name: string;
    homepage_url: string;
    logo_url: string;
    favicon_url: string;
}
export class close {
    T: string;
    v: string;
    t: number;
    vw: number;
    o: number;
    c: number;
    h: number;
    l: number;
    n: number;
}
export class financials{
    ticker: string;
    period: string;
    calendarDate: string;
    reportPeriod: string;
    updated: string;
    dateKey: string;
    accumulatedOtherComprehensiveIncome: string;
    assets: string;
    assetsCurrent: string;
    assetsNonCurrent: string;
    bookValuePerShare: string;
    capitalExpenditure: string;
    cashAndEquivalents: string;
    cashAndEquivalentsUSD: string;
    costOfRevenue: string;
    consolidatedIncome: string;
    currentRatio: string;
    debtToEquityRatio: string;
    debt: string;
    debtCurrent: string;
    debtNonCurrent: string; 
    debtUSD: string;
    deferredRevenue: string;
    depreciationAmortizationAndAccretion: string;
    deposits: string;
    dividendYield: string;
    dividendsPerBasicCommonShare: string;
    earningBeforeInterestTaxes: string;
    earningsBeforeInterestTaxesDepreciationAmortization: string;
    ebitdaMargin: string;
    earningsBeforeInterestTaxesDepreciationAmortizationUSD: string;
    earningBeforeInterestTaxesUSD: string;
    earningsBeforeTax: string;
    earningsPerBasicShare: string;
    earningsPerDilutedShare: string;
    earningsPerBasicShareUSD: string;
    shareholdersEquity: string;
    shareholdersEquityUSD: string;
    enterpriseValue: string;
    enterpriseValueOverEBIT: string;
    enterpriseValueOverEBITDA: string;
    freeCashFlow: string;
    freeCashFlowPerShare: string;
    foreignCurrencyUSDExchangeRate: string;
    grossProfit: string;
    grossMargin: string;
    goodwillAndIntangibleAssets: string;
    interestExpense: string;
    investedCapital: string;
    inventory: string;
    investments: string;
    investmentsCurrent: string;
    investmentsNonCurrent: string;
    totalLiabilities: string;
    currentLiabilities: string;
    liabilitiesNonCurrent: string;
    marketCapitalization: string;
    netCashFlow: string;
    netCashFlowBusinessAcquisitionsDisposals: string;
    issuanceEquityShares: string;
    issuanceDebtSecurities: string;
    paymentDividendsOtherCashDistributions: string;
    netCashFlowFromFinancing: string;
    netCashFlowFromInvesting: string;
    netCashFlowInvestmentAcquisitionsDisposals: string;
    netCashFlowFromOperations: string;
    effectOfExchangeRateChangesOnCash: string;
    netIncome: string;
    netIncomeCommonStock: string;
    netIncomeCommonStockUSD: string;
    netLossIncomeFromDiscontinuedOperations: string;
    netIncomeToNonControllingInterests: string;
    profitMargin: string;
    operatingExpenses: string;
    operatingIncome: string;
    tradeAndNonTradePayables: string;
    payoutRatio: string;
    priceToBookValue: string;
    priceEarnings: string;
    priceToEarningsRatio: string;
    propertyPlantEquipmentNet: string;
    preferredDividendsIncomeStatementImpact: string;
    sharePriceAdjustedClose: string;
    priceSales: string;
    priceToSalesRatio: string;
    tradeAndNonTradeReceivables: string;
    accumulatedRetainedEarningsDeficit: string;
    revenues: string;
    revenuesUSD: string;
    researchAndDevelopmentExpense: string;
    shareBasedCompensation: string;
    sellingGeneralAndAdministrativeExpense: string;
    shareFactor: string;
    shares: string;
    weightedAverageShares: string;
    weightedAverageSharesDiluted: string;
    salesPerShare: string;
    tangibleAssetValue: string;
    taxAssets: string;
    incomeTaxExpense: string;
    taxLiabilities: string;
    tangibleAssetsBookValuePerShare: string;
    workingCapital: string;
}