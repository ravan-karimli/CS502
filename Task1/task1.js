// 1
let fullName = 'Ravan Karimli Jasarat';
let ad_herf = fullName.split('');
console.log(ad_herf)

// 2
let firstName = ad_herf.slice(0,5);
let lastName = ad_herf.slice(6,13);
let yeni_Name = [lastName + firstName + ad_herf.slice(14,21)]
console.log(yeni_Name)
console.log()

// 3
let yeni_Name_join = yeni_Name.join('')
console.log(yeni_Name_join)




let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]


//4
 let say = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 5) {
    say++;
  }
}

console.log(say);



// 5 
const sum = arr.reduce((cem, num) => cem + num, 0);
console.log(sum)

// 6 
let tekrarlanmayan = arr.filter((item, index) => arr.indexOf(item) === index);
let siralanma  = tekrarlanmayan.sort()
console.log(siralanma);

// 7 
let minimum = Math.min(...arr);
let maximum = Math.max(...arr);
console.log(minimum)
console.log(maximum)

// 8
let ad = "Ravan";
let namearr = ad.split("");
let ad_uzunlugu = namearr.length;

console.log("adin uzunlugu : ", ad_uzunlugu);

if (arr.includes(ad_uzunlugu)) {
  console.log("Adinizin uzunlugu arrayde movcuddur");
}




// 9 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 2) {
      console.log("ilk 3 e bolunende qaliqda 2 alinan reqem", arr[i] , "indeksi ise ", [i]);
      break; 
    }
  }


// 10 
let enboyuk = arr[0]; // ilk ededden bashlayib muqayise etsin
let enboyukindex = 0; // boyuk ededin indexin tapmaq ucun qeyd edirik

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > enboyuk) {
    enboyuk = arr[i];
    enboyukindex = i;
  }
}

console.log("en boyuk eded",enboyuk, "indeksi ise", enboyukindex)


// 11 
let dordun_indeksi = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    dordun_indeksi.push(i);
  }
}
console.log("4 reqeminin array-deki indexleri", dordun_indeksi);




// 12 
let ilk = arr.indexOf(5);
let son = arr.lastIndexOf(5);

console.log("ilk index:", ilk , ", son index ise:" ,son)



// 13 
let yeni_arr = arr.filter(num => num > 2);
let ferq = yeni_arr.length - arr.length;
console.log("2-den boyuk olanlar:", yeni_arr)
console.log("aradaki uzunluq ferqi ise:", ferq)


// 14 
let cem_index = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 7) {
    cem_index += i;
  }
}

console.log("7 reqeminin index-leri cemi", cem_index)




let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]





// 16 
function name_t() {
    let start_t = arr2.filter(item => item.name.startsWith('t'));
    return start_t;
}

const new_start_t = name_t(); 
console.log(new_start_t);


// 17 
function name_tt() {
    let start_tt = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t'));
    return start_tt;
}

const obyekt_uzunlugu = name_tt().length
console.log(obyekt_uzunlugu)    


// 18 
function name_tt() {
    let start_tt = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t'));
    return start_tt;
}

const sumKeys = name_tt().reduce((sum, item) => sum + item.key, 0);
console.log(sumKeys)


// 19 
let e_son =  arr2.filter((item) => item.name.endsWith('e'));
let e_son2 = e_son.map((item) => ({...item,name:"SuperDev"}))
console.log(e_son2);


// 20 
function uzun_name() {
    const uzun_ad = arr2.reduce((sum, item) => (item.name.length > arr2[sum].name.length) ? arr2.indexOf(item) : sum, 0);
    return uzun_ad;
}
const cavab = arr2[uzun_name()].key
console.log(cavab)


// 21 
function uzun_name2() {
    const uzun_ad2 = arr2.reduce((sum, item, index) => (item.name.length > arr2[sum].name.length) ? index : sum, 0);
    return uzun_ad2
}

const uzun_name_quvvet = uzun_name2() ** 2;
console.log(uzun_name_quvvet)




// 22 
function dord_array() {
    const dord_array_filter = arr2.filter(item => item.name.length == 4);
    return dord_array_filter;
}

const yeni_arr_filter = dord_array();
console.log(yeni_arr_filter); 



// 23 
function key_boyuk() {
    let max_key = arr2.reduce((sum, item) => (item.key > sum.key) ? item : sum);
    return max_key.name;
}
console.log(key_boyuk())



// 24
function L_daxildir(){
  let L_daxil = arr2.findIndex((item)  => item.name.toUpperCase().includes('LL'));
  return L_daxil
}
console.log(L_daxildir());


// 25
function t_daxildir() {
  let t_daxil = arr2.find((item) => item.name.includes('tt'));
  return t_daxil.key;
}
console.log(t_daxildir());