merge=(pillarArray,l,m,r)=>{

    let i=l,j=m+1;

    let temp=[],k=0;
    //filling temporary array
    for(let x=l;x<=r;++x){
        if(i>m){
            temp[k]=array[j++];
            updatePillar(pillarArray[j-1],array[j-1],'red');
        }
        else if(j>r){
            temp[k]=array[i++];
            updatePillar(pillarArray[i-1],array[i-1],'red');
        }
        else if(array[i]<array[j]){
            temp[k]=array[i++];
            updatePillar(pillarArray[i-1],array[i-1],'red');
        }
        else{
            temp[k]=array[j++];
            updatePillar(pillarArray[j-1],array[j-1],'red');
        }
        ++k;
    }
    for(let x=0;x<k;++x){
        array[l++]=temp[x];
        updatePillar(pillarArray[l-1],array[l-1],'darkgreen');
    }
}
partition=(pillarArray,l,r)=>{
    if(l>=r){
        return;
    }
    let mid=Math.floor((l+r)/2);
    updatePillar(pillarArray[mid],array[mid],'orange');

    partition(pillarArray,l,mid);
    partition(pillarArray,mid+1,r);

    merge(pillarArray,l,mid,r);
}
mergeSort=(pillarArray)=>{
     partition(pillarArray,0,size-1);
}