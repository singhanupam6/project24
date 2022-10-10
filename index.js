const row=5;
const columns=5;
const myArray1=[];

for(let i=0; i<row; i++)
{
    myArray1[i]=[];
    for( let j=0; j<columns; j++)
    {
        myArray1[i][j]=i,j;
        
    }
}
console.log(myArray1);