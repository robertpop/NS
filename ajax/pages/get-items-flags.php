<?php

	Ajax::requireLoggedIn();
	
	Ajax::output(Notify::getItemsFlags($_GET['items'], User::getLogged()->id));
	