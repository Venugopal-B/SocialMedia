PGDMP             
            |            Social    15.4    15.4 7    6           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            7           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            8           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            9           1262    16493    Social    DATABASE     {   CREATE DATABASE "Social" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE "Social";
                postgres    false            �            1259    16596    comments    TABLE     �   CREATE TABLE public.comments (
    id integer NOT NULL,
    descp character varying(200),
    createdat timestamp without time zone,
    commentuserid integer NOT NULL,
    commentpostid integer NOT NULL
);
    DROP TABLE public.comments;
       public         heap    postgres    false            �            1259    16595    comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.comments_id_seq;
       public          postgres    false    219            :           0    0    comments_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;
          public          postgres    false    218            �            1259    16642    likes    TABLE     q   CREATE TABLE public.likes (
    id integer NOT NULL,
    userid integer NOT NULL,
    postid integer NOT NULL
);
    DROP TABLE public.likes;
       public         heap    postgres    false            �            1259    16641    likes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.likes_id_seq;
       public          postgres    false    225            ;           0    0    likes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;
          public          postgres    false    224            �            1259    16584    posts    TABLE     �   CREATE TABLE public.posts (
    id integer NOT NULL,
    descp character varying(200),
    img character varying(200),
    userid integer NOT NULL,
    createdt timestamp without time zone
);
    DROP TABLE public.posts;
       public         heap    postgres    false            �            1259    16583    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public          postgres    false    217            <           0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public          postgres    false    216            �            1259    16625    relationships    TABLE     �   CREATE TABLE public.relationships (
    id integer NOT NULL,
    followeruserid integer NOT NULL,
    followeduserid integer NOT NULL
);
 !   DROP TABLE public.relationships;
       public         heap    postgres    false            �            1259    16624    relationships_id_seq    SEQUENCE     �   CREATE SEQUENCE public.relationships_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.relationships_id_seq;
       public          postgres    false    223            =           0    0    relationships_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.relationships_id_seq OWNED BY public.relationships.id;
          public          postgres    false    222            �            1259    16613    stories    TABLE     �   CREATE TABLE public.stories (
    id integer NOT NULL,
    img character varying(200) NOT NULL,
    storyuserid integer NOT NULL
);
    DROP TABLE public.stories;
       public         heap    postgres    false            �            1259    16612    stories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.stories_id_seq;
       public          postgres    false    221            >           0    0    stories_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.stories_id_seq OWNED BY public.stories.id;
          public          postgres    false    220            �            1259    16573    users    TABLE     t  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(45) NOT NULL,
    email character varying(45) NOT NULL,
    password character varying(200) NOT NULL,
    name character varying(45) NOT NULL,
    coverpic character varying(300),
    profilepic character varying(300),
    city character varying(45),
    website character varying(45)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16572    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            �           2604    16599    comments id    DEFAULT     j   ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);
 :   ALTER TABLE public.comments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    16645    likes id    DEFAULT     d   ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);
 7   ALTER TABLE public.likes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225                       2604    16587    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16628    relationships id    DEFAULT     t   ALTER TABLE ONLY public.relationships ALTER COLUMN id SET DEFAULT nextval('public.relationships_id_seq'::regclass);
 ?   ALTER TABLE public.relationships ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    16616 
   stories id    DEFAULT     h   ALTER TABLE ONLY public.stories ALTER COLUMN id SET DEFAULT nextval('public.stories_id_seq'::regclass);
 9   ALTER TABLE public.stories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            ~           2604    16576    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            -          0    16596    comments 
   TABLE DATA           V   COPY public.comments (id, descp, createdat, commentuserid, commentpostid) FROM stdin;
    public          postgres    false    219   �>       3          0    16642    likes 
   TABLE DATA           3   COPY public.likes (id, userid, postid) FROM stdin;
    public          postgres    false    225   ?       +          0    16584    posts 
   TABLE DATA           A   COPY public.posts (id, descp, img, userid, createdt) FROM stdin;
    public          postgres    false    217   U?       1          0    16625    relationships 
   TABLE DATA           K   COPY public.relationships (id, followeruserid, followeduserid) FROM stdin;
    public          postgres    false    223   �?       /          0    16613    stories 
   TABLE DATA           7   COPY public.stories (id, img, storyuserid) FROM stdin;
    public          postgres    false    221   -@       )          0    16573    users 
   TABLE DATA           i   COPY public.users (id, username, email, password, name, coverpic, profilepic, city, website) FROM stdin;
    public          postgres    false    215   J@       @           0    0    comments_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.comments_id_seq', 6, true);
          public          postgres    false    218            A           0    0    likes_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.likes_id_seq', 39, true);
          public          postgres    false    224            B           0    0    posts_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.posts_id_seq', 28, true);
          public          postgres    false    216            C           0    0    relationships_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.relationships_id_seq', 30, true);
          public          postgres    false    222            D           0    0    stories_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.stories_id_seq', 1, false);
          public          postgres    false    220            E           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 23, true);
          public          postgres    false    214            �           2606    16601    comments comments_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            postgres    false    219            �           2606    16647    likes likes_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_pkey;
       public            postgres    false    225            �           2606    16589    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public            postgres    false    217            �           2606    16630     relationships relationships_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.relationships
    ADD CONSTRAINT relationships_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.relationships DROP CONSTRAINT relationships_pkey;
       public            postgres    false    223            �           2606    16618    stories stories_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.stories
    ADD CONSTRAINT stories_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.stories DROP CONSTRAINT stories_pkey;
       public            postgres    false    221            �           2606    16582    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            �           2606    16580    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �           2606    16607 $   comments comments_commentpostid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_commentpostid_fkey FOREIGN KEY (commentpostid) REFERENCES public.posts(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_commentpostid_fkey;
       public          postgres    false    219    217    3209            �           2606    16602 $   comments comments_commentuserid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_commentuserid_fkey FOREIGN KEY (commentuserid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_commentuserid_fkey;
       public          postgres    false    3207    215    219            �           2606    16653    likes likes_postid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_postid_fkey FOREIGN KEY (postid) REFERENCES public.posts(id) ON UPDATE CASCADE ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_postid_fkey;
       public          postgres    false    3209    217    225            �           2606    16648    likes likes_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_userid_fkey;
       public          postgres    false    215    225    3207            �           2606    16590    posts posts_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_userid_fkey;
       public          postgres    false    215    3207    217            �           2606    16636 /   relationships relationships_followeduserid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relationships
    ADD CONSTRAINT relationships_followeduserid_fkey FOREIGN KEY (followeduserid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.relationships DROP CONSTRAINT relationships_followeduserid_fkey;
       public          postgres    false    223    3207    215            �           2606    16631 /   relationships relationships_followeruserid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relationships
    ADD CONSTRAINT relationships_followeruserid_fkey FOREIGN KEY (followeruserid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.relationships DROP CONSTRAINT relationships_followeruserid_fkey;
       public          postgres    false    215    3207    223            �           2606    16619     stories stories_storyuserid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.stories
    ADD CONSTRAINT stories_storyuserid_fkey FOREIGN KEY (storyuserid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.stories DROP CONSTRAINT stories_storyuserid_fkey;
       public          postgres    false    215    221    3207            -   /   x�3��H���W�4202�50�56T04�25�21�q�r��qqq ���      3   '   x�36�4��42�26�42 3,�3.cK0Â+F��� �C�      +   �   x�]̱
�0��9y��Z�.�\�Yl�U(�DB�:��VE�����S}6�4�<���R(D��s�S*)�f��m�Ri��QaP�5Hm� ��[����/Ͽ!�ё���]��  �H\!,--HX�Rn?%��H�B$��s�N'ˬύ���.?      1   "   x�3��4��4��2��42 1��K�=... O��      /      x������ � �      )   	  x�m�K��@���+\���@=���(��j��6�tJA� Q�(��v��r�r�S�I
ʜAcJ��폟�0�7iµmAЊ��Ʊ;����F���U��K2#�6��o=���MV�c�8׆ާ)$��-���{��zY���&���pG��/��g{�I,b�!ֽs໰M�˾yo���z��D��A�"�El�n��P�ِ�l6cY`u�H��k�TҨ��B��{�J@&z��'�[b�͆ @> ��wh�!�~X��\� �kI_i)4�Q~�$���)l�Ԥ�O��r���s�a�6��\9��I'3�S��|0� �t��ϰ�E$�"��R^Q���t�˽,���D�F�,]�S�a��cv�����W,�U������ё�FF���9�f���B�i�w�w��z�Gll�
I�V�<����ȤCF�Xl�)���33Kǒ[p?�p�[��WhT�����\��T�;�usAI����m�,�������m�����jh��w��h�
�O     