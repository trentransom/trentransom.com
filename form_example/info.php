<?php
  $connect = mysql_connect('localhost', 'root', 'paperantvivaldi'); 
  if (!connect) {'Connection Failed:'.mysql_error());
  {mysql_select_db('studentdb', $connect);
  $user_info = "insert into class101 (to, say) values ('$_POST[]','$_POST[email]')";
  if (!mysql_query($user_info, $connect)){die('Error:'.mysql_error());}
  echo "Your information was added to the database.";
  mysql_close($connect);
?>
