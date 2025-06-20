import { type CardType } from '../types/cardType.ts';
import { type Trip } from '../types/tripType.ts';

function mapperTrip(trips: Trip[]): CardType[] {
    return trips.map((trip) => {
        return {
            id: trip.id,
            title: trip.title,
            level: trip.level,
            duration: trip.duration,
            price: trip.price,
            image: trip.image,
        } as CardType;
    });
}

export { mapperTrip };
