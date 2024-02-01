$(document).ready(function () {
	$('#back-end, #front-end, #tools').click(function () {
		var newContent = '';

		switch (this.id) {
			case 'back-end':
				newContent = `
                <h2>Back End</h2>
                <div class="tech-stack">
                <iconify-icon icon="vscode-icons:file-type-node"></iconify-icon>
            <p>NodeJs</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="skill-icons:expressjs-dark"></iconify-icon>
            <p>ExpressJs</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="logos:python"></iconify-icon>
            <p>Python</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="skill-icons:mysql-light"></iconify-icon>
            <p>MySQL</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="skill-icons:mongodb"></iconify-icon>
            <p>Mongo DB</p>
          </div>
        `;
				break;
			case 'front-end':
				newContent = `
                <h2>Front End</h2>
                <div class="tech-row">
                <div class="tech-stack">
                <iconify-icon icon="devicon:html5"></iconify-icon>
            <p>HTML</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="devicon:css3"></iconify-icon>
            <p>CSS</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="vscode-icons:file-type-js-official"></iconify-icon>
            <p>Javascript</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="logos:typescript-icon"></iconify-icon>
            <p>Typescript</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="devicon:tailwindcss"></iconify-icon>
            <p>Tailwind</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="skill-icons:bootstrap"></iconify-icon>
            <p>Bootstrap</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="devicon:jquery"></iconify-icon>
            <p>JQuery</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="devicon:angular"></iconify-icon>
            <p>Angular</p>
          </div>
          </div>
        `;
				break;
			case 'tools':
				newContent = `
                <h2>Tools</h2>
                <div class="tech-stack">
                <iconify-icon icon="devicon:git"></iconify-icon>
            <p>GIT</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="skill-icons:figma-dark"></iconify-icon>
            <p>Figma</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="skill-icons:postman"></iconify-icon>
            <p>Postman</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="logos:visual-studio-code"></iconify-icon>
            <p>Visual Studio</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="skill-icons:photoshop"></iconify-icon>
            <p>Photoshop</p>
          </div>
          <div class="tech-stack">
          <iconify-icon icon="skill-icons:premiere"></iconify-icon>
            <p>Premier Pro</p>
          </div>
          
          
        `;
				break;
		}

		$('#tech-stack-content').hide().html(newContent).fadeIn(300);
	});
});
