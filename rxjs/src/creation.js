import {of, from, Observable, fromEvent} from 'rxjs';
import { scan, map } from 'rxjs/operators';

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

// const stream$ = new Observable(observer => {
//   observer.next('First value');

//   setTimeout(() => observer.next('after 1sec'), 1000)

//   setTimeout(() => observer.complete(), 1500)

//   setTimeout(() => observer.error('error after 2sec'), 2000)

//   setTimeout(() => observer.next('after 3sec'), 3000)
// })

// stream$.subscribe(
//   (v) => console.log('val: ', v),
//   (err) => console.log(err),
//   () => console.log('Complite')
//   )

// stream$.subscribe({
//   next(val) {
//     console.log('val: ', val)
//   },
//   error(err) {
//     console.log(err)
//   },
//   complete() {
//     console.log('Complite')
//   }
// })

fromEvent(document.querySelector('canvas'), 'mousemove')
  .pipe(
    map(e => ({
      x: e.offsetX,
      y: e.offsetY,
      ctx: e.target.getContext('2d')
    }))
  )
  .subscribe(pos => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2)
  })

  const clear$ =fromEvent(document.getElementById('clear'), 'click')

  clear$.subscribe(() => {
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  })