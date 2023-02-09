btn1=document.getElementById('btn1')
btn1.addEventListener("click", first1)

l1=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
l2=[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
day=["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]

function isLeapYear(a)
{
    // console.log(a);
    if(a%100==0)
    {
        if(a%400==0)
        return 1;
        return 0;
    }
    else{
        if(a%4==0)
        return 1;
        return 0;
    }
    return 0;
}


function first1()
{
    const year1=document.getElementById("year1").value
    const month1=document.getElementById("month1").value
    const day1=document.getElementById("day1").value
    const b1=document.getElementById("b1").value
    const b2=b1.split("-")
    if(year1=="" || month1=="" || day1=="")
    {
        const pp1= document.getElementById('pp1');
        pp1.innerText=`Enter a valid date`;
    }


    // if(b1=="")
    // {
    //     const pp1= document.getElementById('pp1');
    //     pp1.innerText=`Enter a valid date`;
    // }
    else{
    const y=parseInt(year1)
    const m=parseInt(month1)
    const d=parseInt(day1)
    // const y=parseInt(b2[0])
    // const m=parseInt(b2[1])
    // const d=parseInt(b2[2])
    // const y=2028
    // const m=1
    // const d=1
    // const date = new Date();
    // const y1=date.getFullYear();
    // const m1=date.getMonth()+1;
    const sy=2023;
    const sm=1;
    const sd=1;
    const id=0;
    const diffy=y-sy;
    const diffm=(m-sm);
    let totalDay=0
    if(isLeapYear(y))
    {
        for(let i=0;i<diffm;i++)
        {
            totalDay+=l2[i];
        }
    }
    else{
        for(let i=0;i<diffm;i++)
        {
            totalDay+=l1[i];
        }
    }
    // console.log("total day", totalDay)
    totalDay+=d;
    // console.log("total day", totalDay)
    totalDay=totalDay%7;
    // console.log("day- ",totalDay-1)


    let countLeapYear=0;
    minY=Math.min(sy,y);
    maxY=Math.max(sy,y);
    for(let i=minY;i<maxY;i++)
    {
        if(isLeapYear(i))
        countLeapYear+=1;
    }
    
    if(diffy<0)
    {
        countLeapYear*=-1;
        
    }
    // if(isLeapYear(y))
    // {
    //     if(diffy<0 && m>2)
    //     {
    //         countLeapYear+=1;

            
    //     }
    //     if(diffy>0 && m<2)
    //     countLeapYear-=1;

    // }

    
    
    totalDay+=countLeapYear+diffy-1;
    td=totalDay%7;
    if(td<0)
    td+=7
    // console.log(td)
    // console.log("last",countLeapYear, td)
    const pp1= document.getElementById('pp1');
    pp1.innerText=`${day[td]}`
    // console.log(isLeapYear(y));
    // console.log(b1, y,m,d, ); 
    }
    
    
}