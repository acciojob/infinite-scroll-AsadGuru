//your code here!

document.addEventListener('DOMContentLoaded', () => {
	const list = document.getElementById('infi-list');
	let itemCount = 0;

	//function to create and append new list items
	function addItems(count) {
		for (let i = 0; i < count; i++) {
			itemCount++;
			const listItem = document.createElement('li');
			listItem.textContent = `Item ${itemCount}`;
			list.appendChild(listItem);
		}
	}

	//initial load of items
	addItems(10);

	//checj if the user has scrolled to the end of the list
	function checkScroll() {
		const listHeight = list.scrollHeight;
		const containerHeight = list.clientHeight;
		const scrollPosition = list.scrollTop;

		//if the user has scrolled to the bottem, add 2 more items
		if(scrollPosition + containerHeight >= listHeight) {
			addItems(2);
		}
	}

	//attach the scroll event listener to the list
	list.addEventListener('scroll', checkScroll);
});

