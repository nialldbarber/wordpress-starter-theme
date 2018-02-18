<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<header>
		<nav>
			<div>				
				<img src="<?php bloginfo('template_directory'); ?>{<!-- link to logo goes here -->}" alt="<?php bloginfo('name'); ?>" />
			</div>
			<div>
				<!-- nav items goes here -->
				<?php
					wp_nav_menu(
						array(
							'theme_location' => '',
							'menu_class'     => '',
						)
					);
				?>				
			</div>			
		</nav>
	</header>

	<div class="container">
		<div class="wrapper">