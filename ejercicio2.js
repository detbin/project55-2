const datos=
    {nombre:'David',
    apellido:'Eskenazi',
    edad:53,
    altura:1.79,
    eresDesarrollador:true}
const Edad=datos.edad
console.log(Edad)
const datosgrupo=[
    {nombre:'David',apellido:'Eskenazi',edad:53,altura:1.79,eresDesarrollador:true},
    {nombre:'Luis',apellido:'Cutillas',edad:64,altura:1.78,eresDesarrollador:true},
    {nombre:'Miguel',apellido:'Peres',edad:29,altura:1.77,eresDesarrollador:false}
]
datosgrupo.sort((a,b) => {
    if (a.edad<b.edad){
        return +1
    }else{
        if (a.edad>b.edad){
            return -1
        } else{
            return 0
        }
    }
}
)
console.log(datosgrupo)
