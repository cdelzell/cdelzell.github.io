// //animation for intro rectangles

// document.addEventListener("DOMContentLoaded", () => {
//     const secondTrees = document.getElementById('secondTrees');
//     let secondTreesHeight = secondTrees.getBoundingClientRect().height;
//     const blocks = document.getElementById("blocks");
//     const blockUpperRight = document.getElementById('blockUpperRight');
//     const blockUpperLeft = document.getElementById('blockUpperLeft');
//     const blockLowerRight = document.getElementById('blockLowerRight');
//     const blockLowerLeft = document.getElementById('blockLowerLeft');

//     const rectArray = [blockUpperRight, blockUpperLeft, blockLowerRight, blockLowerLeft];
//     setHeight(rectArray, secondTreesHeight);
//     setTopMargin(blocks, secondTreesHeight);
// }
// );

// function setHeight(rectArray, height){
//         for(let i = 0; i < rectArray.length; i++){
//             rectArray[i].style.height = `${(height /4)}px`;
//         }
//     }

// function setTopMargin(blocks, height){
//     blocks.style.marginTop = `-${height}px`;
// }

// document.addEventListener("resize", () => {
//     const secondTrees = document.getElementById('secondTrees');
//     let secondTreesHeight = secondTrees.getBoundingClientRect().height;
//     const blocks = document.getElementById("blocks");
//     const blockUpperRight = document.getElementById('blockUpperRight');
//     const blockUpperLeft = document.getElementById('blockUpperLeft');
//     const blockLowerRight = document.getElementById('blockLowerRight');
//     const blockLowerLeft = document.getElementById('blockLowerLeft');

//     const rectArray = [blockUpperRight, blockUpperLeft, blockLowerRight, blockLowerLeft];
//     setHeight(rectArray, secondTreesHeight);
//     setTopMargin(blocks, secondTreesHeight);
// }
// );

const personalStatement = new IntersectionObserver(entries => {
    for(let i = 0; i < entries.length; i++){
        if(entries[i].isIntersecting){
            entries[i].target.classList.add("personalStatementAnimation");
        } else{
            entries[i].target.classList.remove("personalStatementAnimation");
        }
    }
})

personalStatement.observe(document.getElementById("blurb"));

const heading1 = new IntersectionObserver(entries => {
    for(let i = 0; i < entries.length; i++){
        if(entries[i].isIntersecting){
            entries[i].target.classList.add("fadeLineIn");
        } else{
            entries[i].target.classList.remove("fadeLineIn");
        }
    }
})

heading1.observe(document.getElementById("line1"));

const heading2 = new IntersectionObserver(entries => {
    for(let i = 0; i < entries.length; i++){
        if(entries[i].isIntersecting){
            entries[i].target.classList.add("fadeLineIn");
        } else{
            entries[i].target.classList.remove("fadeLineIn");
        }
    }
})

heading2.observe(document.getElementById("line2"));

const heading3 = new IntersectionObserver(entries => {
    for(let i = 0; i < entries.length; i++){
        if(entries[i].isIntersecting){
            entries[i].target.classList.add("fadeLineIn");
        } else{
            entries[i].target.classList.remove("fadeLineIn");
        }
    }
})

heading3.observe(document.getElementById("line3"));