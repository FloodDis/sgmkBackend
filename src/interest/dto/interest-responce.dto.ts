import { Interest } from '../interest.entity';

export class InterestResponceDto {
    constructor(interest: Interest) {
        this.interest_id = interest.interest_id;
        this.interest_name = interest.interest_name;
    }

    interest_id: number;
    interest_name: string;
}