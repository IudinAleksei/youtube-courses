import {of, from, Observable} from 'rxjs';
import { scan } from 'rxjs/operators';

// const stream$ = of(1, 2, 3, 4);

// stream$.subscribe(val => {
//   console.log('Value: ', val);
// })

// const arr$ = from([1, 2, 3, 4]).pipe(
//   scan((acc, v) => acc.concat(v), [])
// );

// arr$.subscribe(val => {
//   console.log('Value: ', val);
// })

const stream$ = new Observable(observer => {
  observer.next('First value');

  setTimeout(() => observer.next('after 1sec'), 1000)

  setTimeout(() => observer.complete(), 1500)

  setTimeout(() => observer.error('error after 2sec'), 2000)

  setTimeout(() => observer.next('after 3sec'), 3000)
})

stream$.subscribe(
  (v) => console.log('val: ', v),
  (err) => console.log(err),
  () => console.log('Complite')
  )