import { Observable } from "rxjs";

const coldTimeStamp = (): Observable<number> => {
    return new Observable((subscriber) => {
        const timestamp = Date.now();
        subscriber.next(timestamp);
    });
};

const obs1$ = coldTimeStamp();

/**
 * Cold observables
 * Unicasting
 * Both subscription return different values for same observable
 * Cold Observables - Data source creation and activation is inside the observable
 */
obs1$.subscribe(val => console.log('Cold subscription 1 ', val));

setTimeout(() => {
    obs1$.subscribe(val => console.log('Cold subscription 2', val));
}, 1000);


const hotTimeStamp = (): Observable<number> => {
    const timestamp = Date.now();
    return new Observable((subscriber) => {
        subscriber.next(timestamp);
    });
};

const obs2$ = hotTimeStamp();

/**
 * Hot observables
 * Multicasting
 * Both subscription return same values for same observable
 * Hot Observable - Data source creation and activation is outside the observable
 * Ex:- fromEvent(), All subjects, BehaviorSubject, share(), ShareReplay()
 */
obs2$.subscribe(val => console.log('Hot subscription 1 ', val));

setTimeout(() => {
    obs2$.subscribe(val => console.log('Hot subscription 2', val));
}, 2000);
