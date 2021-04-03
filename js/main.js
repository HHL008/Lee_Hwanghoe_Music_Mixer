(() => {
  console.log('JS is linked! Hooray!');

const 
	dropZoneContainer = document.querySelector(".dropSection"),
	dragImages = document.querySelectorAll(".music_icon"),
	dropZones = document.querySelectorAll(".icondrop");

function dragStart(event) {
		event.dataTransfer.setData("savedID", this.id);
	}

	function draggedOver(event) {
		event.preventDefault();
	}

	function dropped(event) {
		event.preventDefault();

		if (this.childElementCount > 0) { return; }

		let targetID = event.dataTransfer.getData("savedID");
		event.target.appendChild(document.querySelector(`#${targetID}`));
	}

	dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));
	
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})

})();