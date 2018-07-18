function populatePage() {
    let element;
    for (let index = 0; index < notes.length; index++) {
        const item = notes[index].note_elements[0];
        const id = notes[index].id;
        element = getElementByTag(item);
        element = decorateNote(element, index);
        if (index % 2 === 0) {
            $('#col-left').prepend(element);
        } else {
            $('#col-right').prepend(element);
        }
    }
}

function decorateNote(elementString, index) {
    return `<a class="card" href="note.html?id=${index}"> ${elementString} 
                <div class="card-tools">
					<span class="card-remove">Remove</span>
					<div class="card-date"> ${notes[index].created_date} </div>
				</div>
            </a>`;
}

function getElementByTag(item) {
    switch (item.tag) {
        case 'img':
            return `<img src="${item.content}">`;
        case 'ul':
            return `<ul>${splitList(item.content)}</ul>`;
        case 'a':
            return `<h2><span>${item.content}</span></h2>>`;
        default:
            return `<${item.tag}>${item.content}</${item.tag}>`;
    }
}

function splitList(content) {
    let arr = content.split('\n');
    let listItems = '';
    for (let elem of arr) {
        listItems += `<li>${elem}</li>`;
    }

    return listItems;
}
