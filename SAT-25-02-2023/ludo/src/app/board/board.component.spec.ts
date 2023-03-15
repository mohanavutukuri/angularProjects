import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return empty',()=>{
    let returnedValue = component.getColor(5)
    expect(returnedValue).toBe("")
  });
  it('should return bl',()=>{
    let returnedValue = component.getColor(0)
    expect(returnedValue).toBe('bl')
  })
  it('should return rd',()=>{
    let returnedValue = component.getColor(1)
    expect(returnedValue).toBe('rd')
  })
  it('should return gr',()=>{
    let returnedValue = component.getColor(2)
    expect(returnedValue).toBe('gr')
  })
  it('should return yl',()=>{
    let returnedValue = component.getColor(3)
    expect(returnedValue).toBe('yl')
  })
  it('randN should greater than 0',()=>{
    component.randN=0
    component.rollDice();
    expect(component.randN).toBeGreaterThan(0);
  })
  it('selected pin should be moveblpin1',()=>{
    component.selected=''
    component.movePin('moveblpin1');

    expect(component.selected).toEqual('moveblpin1');
  })
  it('bluepathpins length should be 56',()=>{
    component.setPins();
    expect(component.bluePath.length).toEqual(56);
  })
  it('redpathpins length should be 56',()=>{
    component.setPins();
    expect(component.redPath.length).toEqual(56);
  })
});
