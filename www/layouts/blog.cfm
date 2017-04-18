<cfoutput> <!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<cf_metaTags>

	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

	<cf_vin65GlobalAssets>
	<link href='//fonts.googleapis.com/css?family=Montserrat|Cardo:400,700,400italic' rel='stylesheet' type='text/css'>
	<cf_css files="/assets/css/screen.min.css">

	
	<!--[if lt IE 9]>
		<script src="/assets/js/html5shiv-printshiv.js"></script>
		<script src="/assets/js/respond.min.js"></script>
	<![endif]-->

</head>
<body>

	<header class="primary v65-group">
		<div class="userToolsWrapper v65-group">
			<div class="wrapper">
				<div class="mobileMenu">
					<i class="icon-mobile"></i>
				</div> 

				<div id="user-tools">
					<cf_points>
					<cf_login>
					<cf_modalCart>	
				</div><!--/user-tools-->
			</div>
		</div>

		<h1 class="logo hideText">
			<a href="/" accesskey="h"><cf_websiteName></a>
		</h1>
		
		<nav class="mainMenu">
			<cf_layoutHeaderNav depth="2">
		</nav>
	</header>
	
	<section class="content pageContent v65-group">
		<a class="backToTop" href="##"><i class="icon-up-bold"></i></a>
		<div class="wrapper v65-group">	

			<div class="blogContent">
				<cf_mainContent>
			</div><!--/blogContent-->
			
			<aside class="blogFilterWrapper">
				<a name="footerMenu"></a>
				
				<div class="blogFilter blogFilterLeft">
					<h5>Recent Posts</h5>
					<cf_blogRecentPosts maxrows="10">

					<h5>Blog Categories</h5>
					<cf_blogCategories>

					<h5>Blog Archives</h5>
					<cf_blogArchives>
				</div>
			</aside><!--/blogRightWrapper-->
		</div>
	</section><!--/content-->

	<footer>
		<a name="footerMenu"></a>
		<div class="footerSections">
			<div class="wrapper v65-group">
				<div class="footerSection v65-group">
					<cf_pods location="Footer Menu Title" type="title">
					<nav>
						<cf_layoutFooterNav>
					</nav>
				</div>

				<div class="footerSection">
					<cf_pods location="Footer Contact Info" type="title,description">
				</div>

				<div class="footerSection">
					<cf_pods location="Footer Social Title" type="title">
					<cf_customFile file="/v65html/_social.html">
				</div>

				<div class="newsletterFooterSection">
					<cf_pods location="Footer Newsletter" type="title,description">
					<cf_subscribe contactType="Newsletter">
				</div>
			</div>
		</div>

		<div class="footerTools"> 	
			<ul class="legal">
				<li><cf_copyright></li>
				<li><cf_vin65Accolade></li>
			</ul>
		</div><!--/footerTools-->
	</footer>

	<cf_js files="/assets/js/scripts.js,/assets/nivo/jquery.nivo.slider.pack.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
