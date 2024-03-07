SELECT
    A.ArtNr,
    (select dbo.serie(A.PRODUKTTYP)) Produkttyp
FROM
    WIKED..ART A,
    WIKED..ARTSTAMM S,
    WIKED..KUNDEFLD K1,
    WIKED..KUNDEFLD K2
WHERE
    (
        A.ArtikelId = S.ArtikelId
        AND A.ArtikelId = K1.KEYNR
        AND K1.BEREICH = N'A'
        AND K1.KFELDID = 1550
        AND A.ArtikelId = K2.KEYNR
        AND K2.BEREICH = N'A'
        AND K2.KFELDID = 1600
        AND A.ARTKLCODE = 6100
        AND S.Status = 2
        AND (
            A.Produkttyp <> N'99'
            OR A.Produkttyp IS NULL
        )
        AND K1.KFELDWERTA = N'N'
        AND (
            K2.KFELDWERTA LIKE N'%,-,%'
            OR K2.KFELDWERTA = N'-'
            OR N'-' = N'-'
        )
    )--and ARTNR='03'
ORDER BY
    A.ArtklCode,
    A.Artnr for json auto