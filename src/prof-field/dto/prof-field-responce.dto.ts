import { ProfField } from '../prof-field.entity';


export class ProfFieldResponceDto {
    constructor(profField: ProfField) {
        this.prof_id = profField.prof_id;
        this.prof_name = profField.prof_name;
    }

    prof_id: number;
    prof_name: string;
}