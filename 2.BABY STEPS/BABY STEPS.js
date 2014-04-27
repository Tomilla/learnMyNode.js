var sum = 0;
for (var idx = 2;idx < process.argv.length; idx++) {	//'idx' is alias of index
	sum += Number(process.argv[idx]);
}
console.log(result);

/*
 * Here's the official solution is if you want to compare notes:
 *────────────────────────────────────────────────────────────────────────────────

    var result = 0;
    
    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i]);
    
    console.log(result);

 *────────────────────────────────────────────────────────────────────────────────
**/
