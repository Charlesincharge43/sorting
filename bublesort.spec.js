describe('Bubble Sort', function(){
  beforeEach(function(){
    swapCounter=0;
    comparisonCounter=0;
  })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(swapCounter).toEqual(0);
  });
  it('handles an array of 1', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
    expect(swapCounter).toEqual(0);
  });
  it('handles an array of multiple unordered elements', function(){
    expect( bubbleSort([3,2,1]) ).toEqual( [1,2,3] );
    expect(swapCounter).toEqual(3);
    expect(comparisonCounter).toEqual(3);
  });
  xit('handles an array of multiple unordered elements', function(){
    expect( bubbleSort([3,2,1]) ).toEqual( [1,2,3] );
    expect(swapCounter).toEqual(1);
    expect(comparisonCounter).toEqual(3);
  });
  xit('handles an array of multiple unordered elements', function(){
    expect( bubbleSort([4,2,1,3,5,-1]) ).toEqual( [-1,1,2,3,4,5] );
    expect(swapCounter).toEqual();
    expect(swapCounter).toEqual();
  });
  it('handles an array of strings and returns them in lexigraphical order', function(){
    expect( bubbleSort(['bb','ab','bc']) ).toEqual( ['ab','bb','bc'] );
    expect(swapCounter).toEqual(1);
    expect(comparisonCounter).toEqual(3);
  });
  xit('handles an array of strings and returns them in lexigraphical order', function(){
    expect( bubbleSort(['zz','cba','1','&*','^k']) ).toEqual( [1,2,3,4,5] );
  });
});
