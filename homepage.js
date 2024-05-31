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



const observer = new IntersectionObserver(entries => {
    for(let i = 0; i < entries.length; i++){
        if(entries[i].isIntersection){
            entries[i].target.classList.add("personalStatementAnimation");
        }
    }
})

observer.observe(document.getElementById("hello"));
