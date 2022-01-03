
async function showloader() {
    document.getElementById('loader').classList.remove('hidden');
}

async function hideloader() {
    document.getElementById('loader').classList.add('hidden');
}

function loop(time) {
    const start = Date.now()
    while (Date.now() - start < time);
}

async function wait(time) {
    showloader().then(
        loop(wait)
    ).then(
        hideloader()
    );
}

async function hide(node) {
    node.parentNode.parentNode.style.display = 'none';
}

function next(node, load){
    node.parentNode.parentNode.style.display = 'none';
    document.getElementById(load).classList.remove('hidden');
};

function enable(node) {
    if (node.checked) {
        document.getElementById('start').classList.remove('disabled');
    } 
}