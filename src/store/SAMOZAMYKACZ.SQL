SELECT A.ArtNr artnr, S.Bezeichnung1 bez, dbo.serie(A.Produkttyp)SERIA
FROM ART A, ARTSTAMM S, KUNDEFLD K1
WHERE A.ArtikelId=S.ArtikelId AND S.Status = 2 AND (A.Produkttyp <> '99' OR A.Produkttyp IS NULL) AND S.Artikelid=K1.KEYNR AND K1.KFELDID=1560 AND A.ArtKlCode=1014 AND K1.KFELDWERTA like '%HT%'
FOR JSON path
