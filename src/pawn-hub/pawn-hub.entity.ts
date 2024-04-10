import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('Customers')
export class customer{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'adress', nullable: true })
  adress: string;
  @Column({ name: 'phone', nullable: false })
  phone: string;
  @Column({ name: 'email', nullable: true })
  email: string;
  @Column({ name: 'photoLink', nullable: true })
  photoLink: string;
  @Column({ name: 'note', nullable: true })
  note: string;
}

@Entity('category groups')
export class category_group{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
}

@Entity('categories')
export class category{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'group', type:'integer', nullable: false })
  group: number;
}

@Entity('products')
export class product{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'status', nullable: true })
  status: string;
  @Column({ name: 'loanID', type:'integer', nullable: true })
  loanID: number;
  @Column({ name: 'location', nullable: true })
  location: string;
  @Column({ name: 'estimatedValue', type:'integer', nullable: false })
  estimatedValue: number;
  @Column({ name: 'paid', type:'integer', nullable: false })
  paid: number;
  @Column({ name: 'description', nullable: true })
  description: string;
  @Column({ name: 'condition', nullable: true })
  condition: string;
  @Column({ name: 'photo', nullable: true })
  photo: string;
}

@Entity('loans')
export class loan{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'productID', type:'integer', nullable: false })
  productID: number;
  @Column({ name: 'customerID', type:'integer', nullable: false })
  customerID: number;
  @Column({ name: 'SumOfMoney', type:'integer', nullable: false })
  SumOfMoney: number;
  @Column({ name: 'paid', type:'integer', nullable: false })
  paid: number;
  @Column({ name: 'ConclusionDate', type:'float', nullable: false })
  ConclusionDate: number;
  @Column({ name: 'ExpirationDate', type:'float', nullable: true })
  ExpirationDate: number;
  @Column({ name: 'Interest', type:'float', nullable: false })
  Interest: number;
  @Column({ name: 'note', nullable: true })
  note: string;
}