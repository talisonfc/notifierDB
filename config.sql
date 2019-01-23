/*
update pg_pltemplate set tmpllibrary='$libdir/plpython2' where tmplname='plpythonu';
select * from pg_pltemplate;
*/

create language plpythonu;

/*
drop LANGUAGE plpython2u cascade
http://raghavt.blogspot.com/2013/07/error-could-not-access-file.html
*/