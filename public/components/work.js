class Work extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div class="container">

				<!-- section title -->
				<h2 class="section-title wow fadeInUp">Recent works</h2>

				<div class="spacer" data-height="60"></div>

				<!-- portfolio filter (desktop) -->
				<ul class="portfolio-filter list-inline wow fadeInUp">
					<li class="current list-inline-item" data-filter="*">Everything</li>
					<li class="list-inline-item" data-filter=".FullStack">Full Stack</li>
					<li class="list-inline-item" data-filter=".CloudProjects">Cloud Projects</li>
					<li class="list-inline-item" data-filter=".WordPress">WordPress</li>
				</ul>

				<!-- portfolio filter (mobile) -->
				<div class="pf-filter-wrapper">
					<select class="portfolio-filter-mobile">
						<option value="*">Everything</option>
						<option value=".FullStack">Full Stack</option>
						<option value=".CloudProjects">Cloud Projects</option>
						<option value=".WordPress">WordPress</option>
					</select>
				</div>

				<!-- portolio wrapper -->
				<div class="row portfolio-wrapper">

					<!-- portfolio item -->
					<div class="col-md-4 col-sm-6 grid-item FullStack">
						<a href="#" target="_blank">
							<div class="portfolio-item rounded shadow-dark">
								<div class="details">
									<span class="term">FullStack</span>
									<h4 class="title">RamSwami0021 - Portfolio</h4>
									<span class="more-button"><i class="icon-options"></i></span>
								</div>
								<div class="thumb">
									<img src="/projects/ramswami0021.png" alt="Portfolio-title" />
									<div class="mask"></div>
								</div>
							</div>
						</a>
					</div>

					<!-- portfolio item -->
					<div class="col-md-4 col-sm-6 grid-item FullStack">
						<a href="#" target="_blank">
							<div class="portfolio-item rounded shadow-dark">
								<div class="details">
									<span class="term">FullStack</span>
									<h4 class="title">GloceryWala Website</h4>
									<span class="more-button"><i class="icon-options"></i></span>
								</div>
								<div class="thumb">
									<img src="/projects/GloceryWala-Website.png" alt="Portfolio-title" />
									<div class="mask"></div>
								</div>
							</div>
						</a>
					</div>

					<!-- portfolio item -->
					<div class="col-md-4 col-sm-6 grid-item FullStack">
						<a href="#" target="_blank">
							<div class="portfolio-item rounded shadow-dark">
								<div class="details">
									<span class="term">FullStack</span>
									<h4 class="title">GloceryWala Dashboard</h4>
									<span class="more-button"><i class="icon-options"></i></span>
								</div>
								<div class="thumb">
									<img src="/projects/GloceryWala-Dashboard.png" alt="Portfolio-title" />
									<div class="mask"></div>
								</div>
							</div>
						</a>
					</div>

					<!-- portfolio item -->
					<div class="col-md-4 col-sm-6 grid-item FullStack">
						<a href="#" target="_blank">
							<div class="portfolio-item rounded shadow-dark">
								<div class="details">
									<span class="term">FullStack</span>
									<h4 class="title">BroCoders Bloging Website</h4>
									<span class="more-button"><i class="icon-options"></i></span>
								</div>
								<div class="thumb">
									<img src="/projects/BroCoders.png" alt="Portfolio-title" />
									<div class="mask"></div>
								</div>
							</div>
						</a>
					</div>

					<!-- portfolio item -->
					<div class="col-md-4 col-sm-6 grid-item FullStack">
						<a href="#" target="_blank">
							<div class="portfolio-item rounded shadow-dark">
								<div class="details">
									<span class="term">FullStack</span>
									<h4 class="title">Ram C0 Transport</h4>
									<span class="more-button"><i class="icon-options"></i></span>
								</div>
								<div class="thumb">
									<img src="/projects/Transport Compuney.png" alt="Portfolio-title" />
									<div class="mask"></div>
								</div>
							</div>
						</a>
					</div>

					<!-- portfolio item -->
					<div class="col-md-4 col-sm-6 grid-item WordPress">
						<a href="https://legalvantage.in/" target="_blank">
							<div class="portfolio-item rounded shadow-dark">
								<div class="details">
									<span class="term">WordPress</span>
									<h4 class="title">Legal Vantage</h4>
									<span class="more-button"><i class="icon-options"></i></span>
								</div>
								<div class="thumb">
									<img src="/projects/W1.png" alt="Portfolio-title" />
									<div class="mask"></div>
								</div>
							</div>
						</a>
					</div>

					<!-- portfolio item -->
					<div class="col-md-4 col-sm-6 grid-item WordPress">
						<a href="https://digimarking.in/" target="_blank">
							<div class="portfolio-item rounded shadow-dark">
								<div class="details">
									<span class="term">WordPress</span>
									<h4 class="title">Digi Marking</h4>
									<span class="more-button"><i class="icon-options"></i></span>
								</div>
								<div class="thumb">
									<img src="/projects/W2.png" alt="Portfolio-title" />
									<div class="mask"></div>
								</div>
							</div>
						</a>
					</div>

					<!-- portfolio item -->
					<div class="col-md-4 col-sm-6 grid-item WordPress">
						<a href="https://ssnursinghome.com/" target="_blank">
							<div class="portfolio-item rounded shadow-dark">
								<div class="details">
									<span class="term">WordPress</span>
									<h4 class="title">Nursing Home</h4>
									<span class="more-button"><i class="icon-options"></i></span>
								</div>
								<div class="thumb">
									<img src="/projects/W3.png" alt="Portfolio-title" />
									<div class="mask"></div>
								</div>
							</div>
						</a>
					</div>

				</div>

				<!-- more button -->
				<div class="load-more text-center mt-4 mb-5">
					<a href="javascript:" class="btn btn-default"><i class="fas fa-spinner"></i> Load more</a>
					<!-- numbered pagination (hidden for infinite scroll) -->
					<ul class="portfolio-pagination list-inline d-none">
						<li class="list-inline-item">1</li>
						<li class="list-inline-item"><a href="#">2</a></li>
					</ul>
				</div>

			</div>
        `
    }
};

customElements.define('app-work', Work);