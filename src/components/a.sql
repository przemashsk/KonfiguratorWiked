BEGIN
DECLARE finished INTEGER DEFAULT 0;
DECLARE nrklient,iqdaneid int;
DECLARE data date;

DECLARE cursor_name CURSOR FOR

select distinct d.nr_klienta,d.iddaneiq, ifnull(MAX(data_sprzedazy),'2019-12-31') AS DATA 
from klienci k 
join daneiq d on k.idKlient = d.idKlient 
left join danesprzedazyiq i on i.idDaneIQ =d.idDaneIQ 
where idstatusu in (1,2,4,10) and admin = 0 
group by d.nr_klienta,d.iddaneiq 

union all 

select distinct d.nr_klienta,d.iddaneiq, ifnull(MAX(data_sprzedazy),'2019-12-31') AS DATA 
from sprzedaz_sprawdzenie d join danesprzedazyiq i on i.idDaneIQ =d.idDaneIQ 
group by d.nr_klienta,d.iddaneiq;

DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;

OPEN cursor_name;
getdata: LOOP FETCH cursor_name INTO nrklient,iqdaneid,data;
	IF finished = 1 THEN LEAVE getdata; END IF;
    IF EXISTS (SELECT * FROM daneiq_daty WHERE nr_klienta=nrklient)
    THEN
    	IF data < DATE_ADD(now(), INTERVAL -30 DAY)
    	THEN
        	SET data = DATE_ADD(now(), INTERVAL-30 DAY);
        END IF;
     	UPDATE daneiq_daty set data_sprzedazy = data WHERE nr_klienta = nrklient;
     ELSE
    	INSERT INTO `daneiq_daty`( `nr_klienta`, `iddaneiq`) VALUES (nrklient,iqdaneid);
    
END IF;
END LOOP getdata;
CLOSE cursor_name;
END