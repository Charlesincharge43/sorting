describe('Split', function(){
  beforeEach(function(){
    swapCounter=0;
    comparisonCounter=0;
  })
  it('split is able to merge two splitted sorted arrays into 1 array', function(){
    expect( split([1,2,3,4,5]) ).toEqual( [[1,2], [3,4,5]]);
    //expect(swapCounter).toEqual(0);
  });

  it('handles split of an empty array', function(){
    expect( split([]) ).toEqual( [] );
    //expect(swapCounter).toEqual(0);
  });
  it('handles split of an array of 1', function(){
    expect( split([2]) ).toEqual( [2]);
    //expect(swapCounter).toEqual(0);
  });
  it('handles an array of 1', function(){
    expect( split([1,2,3,4,5]) ).toEqual( [[1,2], [3,4,5]]);
    //expect(swapCounter).toEqual(0);
  });

});
describe('Merge', function(){
  beforeEach(function(){
    swapCounter=0;
    comparisonCounter=0;
  })
  it('merge is able to merge two splitted sorted arrays into 1 array', function(){
    expect( merge([1,3,5], [4,6,7,8]) ).toEqual( [1,3,4,5,6,7,8]);
    //expect(swapCounter).toEqual(0);
  });
});
