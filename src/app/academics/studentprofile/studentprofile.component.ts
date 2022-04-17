import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css'],
  providers: [ConfirmationService],
})
export class StudentprofileComponent implements OnInit {
  
  public gen = [
    {
      label: 'MALE',
      value: 'MALE',
    },
    {
      label: 'FEMALE',
      value: 'FEMALE',
    },
  ];
  public ntn = [
    {
      label: 'INDIA',
      value: 'INDIA',
    },
    {
      label: 'USA',
      value: 'USA',
    },
  ];
  public class = [
    {
      label: 'CSE',
      value: 'CSE',
    },
    {
      label: 'ECE',
      value: 'ECE',
    },
  ];
  public section = [
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
    },
  ];
  public feeStructureType = [
    {
      label: 'Regular',
      value: 'Regular',
    },
    {
      label: 'Day Scholar',
      value: 'Day Scholar',
    },
  ];
  public addStudent = {
    admno: '1',
    gnm:"Ru",
    gg: "FEMALE",
    gn:"INDIA",
    gp:"9089890989",
    admnDt: '04-Apr-2022',
    admnName: 'Yamuna',
    gender: 'FEMALE',
    nationality: 'INDIA',
    class: 'CSE',
    section: 'A',
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

  public studentPro = {
    admn: '',
    gender: '',
    rolls: '',
  };
  public admns = [
    {
      label: 'Select Classes',
      value: '',
    },
    {
      label: 'Class 1',
      value: '1',
    },
    {
      label: 'Class 2',
      value: '2',
    },
  ];
  public gender = [
    {
      label: 'Select Gender',
      value: '',
    },
    {
      label: 'Male',
      value: 'M',
    },
    {
      label: 'Female',
      value: 'F',
    },
  ];
  public rolls = [
    {
      label: 'Select ROLLNO',
      value: '',
    },
    {
      label: 'Roll 1',
      value: '1',
    },
    {
      label: 'Roll 2',
      value: '2',
    },
  ];

  public students: any = [];
  constructor(
    private _dt: DatePipe,
    private _router: Router,
    private confirmationService: ConfirmationService
  ) {}
  loading: boolean = true;
  ngOnInit(): void {
    
  }
  public display = false;
  onGetStudents() {
    this.loading = false;
    this.students = [];
    this.students.push(
      {
        admno: 13,
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
      },
      {
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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
        gnm:"",
        gg: "",
        gn:"",
        gp:"",
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

  onStudentClick(_car: any) {
    this._router.navigateByUrl('/home/studentview');
  }

  CreateStdnt() {
    this.display = true;
    // this._router.navigateByUrl('/home/studentview');
  }

  pay() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }

  public arr: any = [];
  onadd() {
    let clon = JSON.parse(
      JSON.stringify(this.students.unshift(this.addStudent))
    );
    this.arr.push(clon);
    localStorage.setItem('key', JSON.stringify(clon));
  }

  onclear() {
    this.addStudent = {
      gnm:"",
      gg: "",
      gn:"",
      gp:"",
      admno: '',
      admnDt: '',
      admnName: '',
      gender: '',
      nationality: '',
      flg: 'o',
      class: '',
      section: '',
      rollNo: '',
      dob: '',
      feeStructureType: '',
      address: {
        address1: '',
        address2: '',
        country: '',
        city: '',
        street: '',
        zipcode: '',
      },
    };
    localStorage.removeItem('key');
  }
}
