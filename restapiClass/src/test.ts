// [1, 2, 3].myForEach(() => {});
// [1, 2, 3].myForEach((v, i, a) => {console.log(v, i, a)});
// [1, 2, 3].myForEach((v, i) => {console.log(v)});
// [1, 2, 3].myForEach((v) => 3);
// ['1', '2', '3'].myForEach((v) => {
//     console.log(v.slice(0))
// })
// [true, 2, '3'].myForEach((v) => {
//     if(typeof v === 'string'){
//         v.slice(0);
//     }else{
//         v.toFixed();
//     }
// })
// [1, 2, 3].myForEach(function() {
//     console.log(this);
// }, {a: 'b'})
// interface Array<T>{
//     myForEach<K = Window>(callback: (this: K, v: T, i: number, a: T[]) => void, thisArg?: K): void;
// }

// const r1 = [1, 2, 3].myFilter((v) => v  < 2)
// const r2 = [1, 2, 3].myFilter((v, i, a): v is never => false)
// const r3 = ['1', 2, '3'].myFilter((v): v is string => typeof v === 'string')
// const r4 = [{num: 1}, {num: 2}, {num: 3}].myFilter(function(v){
//     return v.num % 2 === 1;
// })
// interface Array<T>{
//     myFilter<S extends T>(callback: (v: T, i: number, a: T[]) => v is S, thisArg?: any): S[]
//     myFilter(callback: (v: T, i: number, a: T[]) => boolean, thisArg?: any): T[]
// }

const r1 = [1, 2, 3].myReduce((a, c) => a + c)
const r2 = [1, 2, 3].myReduce((a, c, i, arr) => a + c, 10)
const r3 = [{num: 1}, {num: 2}, {num: 3}].myReduce(
    function(a, c){
        return{...a, [c.num]: 'hi'}
    },
    {},

)
const r4 = [{num: 1}, {num: 2}, {num: 3}].myReduce(
    function(a, c){
        return a + c.num
    },
    '',
)
interface Array<T>{
    myReduce(callback: (a: T, c: T, i: number, arr: T[]) => T, iV?: T): T;
    myReduce<S>(callback: (a: S, c: T, i: number, arr: T[]) => S, iV?: S): S;
}