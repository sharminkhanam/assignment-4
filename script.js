let currentTab = 'all';
const tabActive = ["bg-sky-500", "border-navy-300", "text-white"];
const tabInactive = ["bg-transparent",  "border-green-200", "text-black"];

const allContainer = document.getElementById('all-container');
const interviewContiner = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');
const emptyState = document.getElementById('empty-state');
const avilable = document.getElementById('avilable')


// total interview reject count
const total = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');
total.innerText = allContainer.children.length

function switchTab(tab) {
   const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
   for(const t of tabs){
        const tabName = document.getElementById("tab-" + t);
       
        if(t === tab){
            tabName.classList.remove( ...tabInactive);
            tabName.classList.add( ...tabActive)
        }else{
            tabName.classList.remove( ...tabActive)
            tabName.classList.add( ...tabInactive);
        }
        updateStat()
   }
   const pages = [allContainer, interviewContiner, rejectedContainer];
   for(const section of pages){
    section.classList.add('hidden')
   }
   emptyState.classList.add('hidden')
   if(tab === 'all'){
    allContainer.classList.remove('hidden');
    if(allContainer.children.length < 1){
        emptyState.classList.remove('hidden')
    }
   }else if(tab === 'interview'){
    interviewContiner.classList.remove('hidden');
    if(interviewContiner.children.length <1){
         emptyState.classList.remove('hidden')
    }
   }else{
    rejectedContainer.classList.remove('hidden');
    if(rejectedContainer.children.length < 1){
        emptyState.classList.remove('hidden')
    }
   }
}
switchTab(currentTab)
document.getElementById('jobs-container').addEventListener('click', function(event){
    
    const clickElement = event.target;
    const card = clickElement.closest('.card');
    const status = card.querySelector('.status');
    const parent = card.parentNode;
 
   
    if(clickElement.classList.contains('interview')){
       
        status.innerText = "Interview";
        interviewContiner.appendChild(card);
        updateStat()
    }
     if(clickElement.classList.contains('rejected')){
       
       status.innerText = "Rejected";
       rejectedContainer.appendChild(card);
       updateStat()
    }
     if(clickElement.classList.contains('delete')){
       
        parent.removeChild(card);
        updateStat()

    }
});
function updateStat (){

    const counts = {
        all : allContainer.children.length,
        interview : interviewContiner.children.length,
        rejected : rejectedContainer.children.length
    };
    total.innerText = counts['all'];
    interview.innerText = counts['interview'];
    rejected.innerText = counts['rejected'];
    avilable.innerText = counts[currentTab];
    if(counts[currentTab] < 1){
        emptyState.classList.remove('hidden')
    }else{
        emptyState.classList.add('hidden')
    }
}

updateStat()