SELECT
	ARTNR artnr,
	CONCAT(A.BEZEICHNUNG1, ' ', A.BEZEICHNUNG2) bez,
	K.KFELDWERTA SO,
	K2.KFELDWERTA TYP,
	concat(K3.KFELDWERTA, K4.KFELDWERTA) WZORY,
	K7.KFELDWERTA ZABLOKOWANE,
	ISNULL(
		(
			select
				dbo.serie(A.PRODUKTTYP)
		),
		99
	) PRODUKTTYP,
	CASE
		WHEN K5.KFELDWERTA in('10670', '10300', '10118') THEN '10301,10304'
		WHEN K5.KFELDWERTA in('10697') THEN 'ZywCDZlot,ZywOENieb'
		ELSE K5.KFELDWERTA
	END KOLORY_KLAMEK,
	CASE
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%ALFA%' THEN 'ALFA'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%BETA%' THEN 'BETA'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%GAMMA%' THEN 'GAMA'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%TORO%' THEN 'TORO'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%SIGMA%' THEN 'SIGMA'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%STRIPE%' THEN 'STRIPE'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%POCKET%' THEN 'POCKET'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%SPACE%RAL%' THEN 'SPACE RAL'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%SPACE%DECOR%' THEN 'SPACE DECOR'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%SPACE%DEERSTONE%' THEN 'SPACE DEERSTONE'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%SLIM%SPACE%LACOBEL%' THEN 'SLIM SPACE LACOBEL'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%SLIM%SPACE%' THEN N'SLIM SPACE ŻYWICA'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%SPACE%LACOBEL%' THEN 'SPACE LACOBEL'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%MODERN%' THEN 'MODERN'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%DUO%' THEN 'DUO'
		WHEN UPPER(A.BEZEICHNUNG1) LIKE '%OMEGA%' THEN 'OMEGA'
		ELSE '-'
	END GRUPA,
	isnull(
		try_convert(int, SUBSTRING(ARTNR, 2, 3)),
case
			when ARTNR like '%180%' then 180
			when ARTNR like '%45%' then 45
			when ARTNR like '%20%' then 20
		end
	) dlugosc,
	case
		when SUBSTRING(ARTNR, 5, LEN(ARTNR)) like '%45%' then 45
		else 90
	end kat,
	case
		when LOWER(A.BEZEICHNUNG1) like N'%podś%'
		or LOWER(A.BEZEICHNUNG1) like '%led%' then 'true'
		else '-'
	end led,
	case
		when LOWER(A.BEZEICHNUNG1) like '%czytnik%' then 's'
		when ARTNR like '%x%' then 'x'
		else '-'
	end opcjepochwytu,
	K6.KFELDWERTA KOD
FROM
	KUNDEFLD K
	left join KUNDEFLD K2 ON K.KEYNR = K2.KEYNR
	AND K2.KFELDID IN(54)
	left join KUNDEFLD K3 ON K.KEYNR = K3.KEYNR
	AND K3.KFELDID IN(1600)
	left join KUNDEFLD K4 ON K.KEYNR = K4.KEYNR
	AND K4.KFELDID IN(1601)
	left join KUNDEFLD K7 ON K.KEYNR = K7.KEYNR
	AND K7.KFELDID IN(1605)
	left join KUNDEFLD K5 ON K.KEYNR = K5.KEYNR
	AND K5.KFELDID IN(160)
	left join KUNDEFLD K6 ON K.KEYNR = K6.KEYNR
	AND K6.KFELDID IN(151)
	LEFT JOIN ART A ON K.KEYNR = A.ARTIKELID
	left join ARTSTAMM b on b.ARTIKELID = A.ARTIKELID
WHERE
	K.KFELDID IN(127) --AND KFELDWERTA='-' 
	AND ARTKLCODE = 1011
	AND A.PRODUKTTYP <> '99'
	AND A.PRODUKTTYP NOT LIKE '%PCV%'
	AND A.PRODUKTTYP NOT LIKE '%1552%'
	AND A.PRODUKTTYP NOT LIKE '%1554,1555%'
	AND LOWER(A.BEZEICHNUNG1) NOT LIKE '%rozeta%'
	and artnr <> 'SlimSoloZ' --and lower(BEZEICHNUNG1) like'%alfa%'
	--and UPPER(A.BEZEICHNUNG1) NOT LIKE '%MODERN%'
	--and ARTNR<>'Lava2s'
	AND b.STATUS = 2 --STATUS KOMPLETNY
	--and ARTNR like 'P250%'
order by
	2,
	1 for json PATH