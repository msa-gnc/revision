/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object kullanılır

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

const isim=["Ali","Veli","Sema"]
const soyad=["güven","güvenme","doğrusöz"]

console.log(`${isim[1]} ${soyad[1]}`)

const ogr={ ad:"Ali",soyad:"Güven"}
console.log(ogr.ad,ogr.soyad)
/* -------------------------------------------------------------------------- */
//* --------------------------------------------------------------*/
//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/
//! 3 farkli yöntem ile Object oluşturulabilir.
//? 1. Object() class'ından türetme
// Bu yöntem, JavaScript'teki Object sınıfını kullanarak bir nesne oluşturmayı içerir. 
// Bunun için new Object() yazılır ve sonradan nesneye özellikler atanır.

const car=new Object()

car.marka="BMW"
car.model=2010
car.horsePower=180
console.log(car)

const car1=new Object()
car1.marka="Scoda"
car1.model=2024
car1.horsePower=200
console.log(car1)
/* -------------------------------------------------------------------------- */
//? 2. Constructor metodu ile Object oluşturma
//! OOP(Object Oriented Programming)

function PersonelList(id,ad,maas){
    this.id=id;
    this.ad=ad;
    this.maas=maas
}

const personel1=new PersonelList(1000,"Ali",50000)
console.log(personel1)
const personel2=new  PersonelList(1001,"Seda",45000)
console.log(personel2)
//! her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını arttırabilir
/* -------------------------------------------------------------------------- */
//? 3. Object Literal (en çok kullanacağımız ve tercih edilen yöntem)

const icecek={
    ad:"çay",
    hazirlikSüresi:"Yarım Saat",
    tercihler:["açık","demli","paşa çayı"],
    mansei:"Rize"
}

// Boş Object
const house={}
house.room=5
house.heating="doğalgaz"
house.pool=true

/* -------------------------------------------------------------------------- */
let personel={
name:"Sidal",
lastName:"sina",
birth:1988,
horoscope:"taurus",
isMarried:true,
children:["sena","sema","süha"],
address:{ city:"İzmir",street:"lale",mahalle:"alsancak",no:5},
calculateAge:function(){
    console.log(this)
    return new Date().getFullYear()-this.birth;
},
selamla:()=>{
return "Merhaba"
},

// * Object içinde arrow function kullanılıyorsa this keywordu window nesnesine karşılık gelir. Zaten arrow functionın ortaya çıkma sebebi thislerden kurtulmaktır.
arrowFunction:()=>{
    return personel.isMarried
}

}

console.log(this)

console.log(personel.calculateAge())
console.log(personel.arrowFunction())

 //! Arrow functionda this window objesine karşılık gelir. Arrow functionda this kullanmıyoruz
  //! window objesi içinde isMarried isimli bir özellik bulamadığından undefined
console.clear()
    /* -------------------------------------------------------------------------- */
  //* ------- OKUMA/ERİŞME ----------

  //! 1- .(dot) notation ile erişim
  console.log(personel.name)
  console.log(personel.birth)
  console.log(personel.children.forEach((child)=>console.log(child)))
  console.log(personel.horoscope)
  console.log(personel.address.city)
  console.log(personel.address.mahalle)
  console.log(personel.selamla())


   //! 1- [] square brackets, özellik yöntemi
   console.log(personel["name"])
   console.log(personel["horoscope"])
   console.log(personel["address"]["city"])

//dinamik değerlere erişim için avantajlıdır
const keyWord="birth"
console.log(personel[keyWord])
console.clear()
/* -------------------------------------------------------------------------- */
//? yeni bir özellik (property) ekleme
personel.phone="342-456-246"
personel[keyWord]=1990
console.log(personel)
/* -------------------------------------------------------------------------- */
//? Bir objeyi kopyalama
//! 1- Shallow Copy (sığ) Kopyalama
personel.name="Hatice"
const firmaPersoneli=personel
firmaPersoneli.name="Fatma"
console.log(`Personel: ${personel.name}`)
console.log(`firmaPersoneli: ${firmaPersoneli.name}`)
//! 2 Deep Copy yöntemi
// JSON.stringify() , JSON.parse()
console.log("***********************")
const deepCopyPersonel= JSON.parse(JSON.stringify(personel))
console.log(deepCopyPersonel)
deepCopyPersonel.name="Zehra"
console.log(personel)
console.log(deepCopyPersonel)

//! 3- Object Assign
//! 4 Spread Operatoru
console.clear()
//* ------------------------------------------------------ */
//*                     OBJECT METHODS
//* ------------------------------------------------------ */
//? İçiçe (nested) Object kullanımı

const employeeList={
person1:{ name:"Salih",lastname:"sina",age:45},
person2:{ name:"sema",lastname:"semrügül",age:34},
person3:{ name:"Nida",lastname:"nehaber",age:24},
person4:{ name:"Fena",lastname:"fin",age:35},
}

console.log(employeeList.person2.lastname)
console.log(employeeList["person2"]["lastname"])

 //* -------------------------------------------------------- */
//*                   FOR - OF -IN YAPISI                    */
//* -------------------------------------------------------- */
//? for ... of
//! for...of sıralı olan dizilerde kullanılır ama objectlerde daha komplex bir yapı olduğu için for-of kullanılmaz

// for (let i of employeeList){
//     console.log(i)
// }


//? for in 
//! for...in yapısı ile obje keyleri üzerinde döngü kurabiliriz ancak bu tavsiye edilen bir yöntem değildir. Bunun yerine obje özelliklerini diziye dönüştüren metodları kullanabiliriz
for ( i in employeeList){
    console.log(i)
}

for ( i in personel){
    console.log(i)
}
console.clear()
/* -------------------------------------------------------------------------- */
// for in yada for of yerine object  arraye çeviren yöntemler var
// Bir object key - value çiftlerinden oluşur

//?  KEY lere erişim sağlamak için Object.keys metodu kullanılır.
const keys=Object.keys(personel)

console.log(keys)

//? VALUE lara erişim sağlamak için Object.values()

const value=Object.values(personel)
console.log(value)

//? OBJECT.ENTRIES

const degerler=Object.entries(personel)
console.log(degerler)


/* ------------------------------------------------------ */
//*         JSON -Javascript Script Object Notation       */
//* ------------------------------------------------------ */
console.clear()
//? JSON ile farklı veri türleri barındırılabilir
//? Dillerden bağımsızdır.
//? nesnelerin (objelerin) temsil edilmesi için anahtar-değer çiftlerini kullanır. Bu, verilerin daha iyi organize edilmesini ve ilişkilendirilmesini sağlar.
//? JSON, veri  işleme açısından hızlıdır. Bu nedenle web uygulamalarında ve servislerde yaygın olarak kullanılır.

const employees = [
    {
      name1: "Abdulkadir",
      lastName: "baki",
      dateOfBirth: 1980,
      salary: 20000,
      job: "developer",
    },
    {
      name2: "elif",
      lastName: "akalın",
      dateOfBirth: 1990,
      salary: 20000,
      job: "developer",
    },
    {
      name3: "esra",
      lastName: "bilgin",
      dateOfBirth: 1985,
      salary: 21000,
      job: "devops",
    },
  ];

  employees.map((employee)=>console.log(employee.salary))
  // bir array olduğu için yeni bir eleman eklemek için array metodlarından push kullanılır

  employees.push(
    {
        name4: "Celal",
        lastName: "Baki",
        dateOfBirth: 1980,
        salary: 50000,
        job: "developer",
      }
  )

console.log(employees)