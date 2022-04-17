import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-sfeecllctn',
  templateUrl: './sfeecllctn.component.html',
  styleUrls: ['./sfeecllctn.component.css'],
  providers: [ConfirmationService],
})
export class SfeecllctnComponent implements OnInit {
  public searchStdnts: any = [];
  public text = '';
  public filteredCountries: any;
  public countries: any;

  activeState: boolean[] = [false];
  public display = false;
  constructor(
    private confirmationService: ConfirmationService,
    private _dt: DatePipe
  ) {}

  ngOnInit(): void {
    this.searchStdnts.push(
      {
        admno: 13,
        admnName: 'Ajith',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Male',
        class: '1',
        section: 'A',
        rollNo: '123',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        flg: 'o',
        fee: [
          {
            net: 10000,
            rec: 10000,
            concession: 0,
            adv: 0,
            asOnDe: 0,
          },
        ],
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 12,
        admnName: 'Vijay',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Male',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        fee: [
          {
            net: 20000,
            rec: 10000,
            concession: 0,
            adv: 0,
            asOnDe: 0,
          },
        ],
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 11,
        admnName: 'Sushi',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Male',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Hostel',
        nationality: 'INDIAN',
        fee: [
          {
            net: 10000,
            rec: 10000,
            concession: 0,
            adv: 0,
            asOnDe: 0,
          },
        ],
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 10,
        admnName: 'Ruby',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Female',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        fee: [
          {
            net: 50000,
            rec: 10000,
            concession: 1000,
            adv: 0,
            asOnDe: 0,
          },
        ],
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 9,
        admnName: 'Krish',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Male',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        fee: [
          {
            net: 10000,
            rec: 10000,
            concession: 1000,
            adv: 0,
            asOnDe: 0,
          },
        ],
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 8,
        admnName: 'Ram',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Male',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Hostel',
        nationality: 'INDIAN',
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 7,
        admnName: 'Scott',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Male',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 6,
        admnName: 'Sam',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Female',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 5,
        admnName: 'umi',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Female',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Hostel',
        nationality: 'INDIAN',
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 15,
        admnName: 'Yamini',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Female',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        fee: [
          {
            net: 20000,
            rec: 10000,
            concession: 1000,
            adv: 0,
            asOnDe: 0,
          },
        ],
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 2,
        admnName: 'Pavan',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Male',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
        fee: [
          {
            net: 10000,
            rec: 9000,
            concession: 1000,
            adv: 0,
            asOnDe: 0,
          },
        ],
      },
      {
        admno: 200,
        admnName: 'Yamuna G',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Female',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
        fee: [
          {
            net: 10000,
            rec: 9000,
            concession: 1000,
            adv: 0,
            asOnDe: 0,
          },
        ],
      },
      {
        admno: 3,
        admnName: 'Sai',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Male',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        fee: [
          {
            net: 20000,
            rec: 10000,
            concession: 1000,
            adv: 0,
            asOnDe: 0,
          },
        ],
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      },
      {
        admno: 4,
        admnName: 'Srav',
        admnDt: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        gender: 'Female',
        class: '1',
        section: 'A',
        rollNo: '123',
        flg: 'o',
        dob: this._dt.transform(new Date(), 'dd-MMM-YYYY'),
        feeStructureType: 'Day Scholar',
        nationality: 'INDIAN',
        address: {
          address1: 'Palo alto',
          address2: 'Palo alto',
          country: 'India',
          city: 'Hyderabad',
          street: 'HB-4',
          zipcode: '121212',
        },
      }
    );
  }

  search(event: { query: any }) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.searchStdnts.length; i++) {
      let country = this.searchStdnts[i];
      if (country.admnName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredCountries = filtered;
  }

  toggle(index: number) {
    this.activeState[index] = false;
  }

  public semOp = [
    {
      label: 'Sem - i',
      value: '1',
    },
    {
      label: 'Sem - ii',
      value: '2',
    },
  ];
  onClick() {
    this.display = true;
  }
  public det: any = [];
  pay(group: any) {
    this.det = [];
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.display = true;
        this.det.push({
          recDt: this._dt.transform(new Date(), 'dd-MMM-yyyy'),
          feeType: 'tution fee',
          schedule: 'April Month',
          pdFor: this.getSem(),
          duemnt: this.duE,
          advnc: group.fee[0]['adv'],
        });
        //Actual logic to perform a confirmation
      },
    });
  }
  public sem = '2';
  getSem() {
    let fil = _.filter(this.semOp, { value: this.sem })[0];
    return fil['label'];
  }
  public addStudent = {
    admno: '1',
    admnDt: '04-Apr-2022',
    admnName: 'Yamuna',
    gender: 'Female',
    nationality: 'Indian',
    class: 'CSE',
    section: 'A Section',
    rollNo: 'CSE00001',
    dob: '30-10-1995',
    feeStructureType: 'Day Scholar',
    flg: 'n',
    address: {
      address1: 'Palo alto',
      address2: 'Palo alto',
      country: 'India',
      city: 'Hyderabad',
      street: 'HB-4',
      zipcode: '121212',
    },
  };

  onModuleClick(group: any) {
    this.addStudent = {
      admno: group.admno,
      admnDt: group.admnDt,
      admnName: group.admnName,
      gender: group.gender,
      nationality: group.nationality,
      flg: 'o',
      class: group.class,
      section: group.section,
      rollNo: group.rollNo,
      dob: group.dob,
      feeStructureType: group.feeStructureType,
      address: {
        address1: '',
        address2: '',
        country: '',
        city: '',
        street: '',
        zipcode: '',
      },
    };
    this.text = group['admnName'];
  }

  public duE = 0;
  duemt(grp: any) {
    this.duE = 0;
    let due = 0;
    // if (grp['fee'][0]['asOnDe'] != 0) {
    due +=
      grp['fee'][0]['net'] -
      (grp['fee'][0]['rec'] + grp['fee'][0]['concession']);
    // }
    this.duE = due;
    return due;
  }
}
