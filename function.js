export function feladat01(szinek){

	let darab = szinek.length; //a tömb mérete számban
    
    let valasz = 2**darab-1-darab //a csoportosíthatóságot a binomiális tétel segítségével (2^n)-ként határoztam meg, ahol n a teljes halmaz mérete; ebből az üres halmaz mérete (-1) és az egy elemű halmazok mérete (-darab) levonásra kerül
    
return valasz;
}; 
